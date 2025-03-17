import { defineExtension } from "reactive-vscode";
import { env, TerminalLink, Uri, window, workspace } from "vscode";
import { configs, displayName } from "./generated/meta";

// See https://kermanx.com/reactive-vscode/guide/
// for the doc about the reactive-vscode
const { activate, deactivate } = defineExtension(() => {
    window.registerTerminalLinkProvider({
        provideTerminalLinks(context) {
            const urlRegex = /http?:\/\/[^\s]+/g;
            const links = [];
            let match;
            while ((match = urlRegex.exec(context.line)) !== null) {
                links.push({
                    startIndex: match.index,
                    length: match[0].length,
                    url: match[0],
                });
            }
            return links.map(
                (link) =>
                    new TerminalLink(link.startIndex, link.length, link.url)
            );
        },
        handleTerminalLink: async (link) => {
            const url = link.tooltip;
            if (!url) return;
            const candidatesStr: string = workspace
                .getConfiguration("browser-chooser")
                .get("candidates")!;
            if (!candidatesStr) {
                window.showInformationMessage(
                    `${displayName} extension: On. No candidate browsers, please configure ${configs.browserChooserCandidates.key}`
                );
            }
            const candidates = candidatesStr.split(",");
            const selectedBrowser = await window.showQuickPick(
                candidates.map((b) => b.trim()),
                { placeHolder: "Select a browser" }
            );
            if (!selectedBrowser) {
                return;
            }
            // change workbench.external-browser
            const innerConfig = workspace.getConfiguration("workbench");
            innerConfig.update("externalBrowser", selectedBrowser).then(() => {
                // open
                env.openExternal(Uri.parse(url)).then((success) => {
                    if (success) return;
                    window.showErrorMessage(
                        `${displayName} encountered some location errors, please contact github.com/Mori-Yang/vscode-browser-chooser.`
                    );
                });
            });
        },
    });
});

export { activate, deactivate };
