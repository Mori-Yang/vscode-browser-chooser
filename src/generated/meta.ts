// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info
export const publisher = "MoriYang"
export const name = "vscode-browser-chooser"
export const version = "0.1.3"
export const displayName = "Browser Chooser"
export const description = "Support selecting browser"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = never

/**
 * Commands map registed by `MoriYang.vscode-browser-chooser`
 */
export const commands = {
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */
export type ConfigKey = 
  | "browser-chooser.candidates"

export interface ConfigKeyTypeMap {
  "browser-chooser.candidates": string,
}

export interface ConfigShorthandMap {
  browserChooserCandidates: "browser-chooser.candidates",
}

export interface ConfigShorthandTypeMap {
  browserChooserCandidates: string,
}

export interface ConfigItem<T extends keyof ConfigKeyTypeMap> {
  key: T,
  default: ConfigKeyTypeMap[T],
}


/**
 * Configs map registered by `MoriYang.vscode-browser-chooser`
 */
export const configs = {
  /**
   * Add selected browser
   * @key `browser-chooser.candidates`
   * @default `"chrome, edge"`
   * @type `string`
   */
  browserChooserCandidates: {
    key: "browser-chooser.candidates",
    default: "chrome, edge",
  } as ConfigItem<"browser-chooser.candidates">,
}

export interface ScopedConfigKeyTypeMap {
}

export const scopedConfigs = {
  scope: "vscode-browser-chooser",
  defaults: {
  } satisfies ScopedConfigKeyTypeMap,
}

export interface NestedConfigs {
  "browser-chooser": {
    "candidates": string,
  },
}

export interface NestedScopedConfigs {
}

