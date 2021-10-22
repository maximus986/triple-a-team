/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly keywords: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePluginPluginOptions = {
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly preset: Maybe<SitePluginPluginOptionsPreset>;
  readonly basePath: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly component: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPreset = {
  readonly baseColors: Maybe<SitePluginPluginOptionsPresetBaseColors>;
  readonly bootstrap: Maybe<SitePluginPluginOptionsPresetBootstrap>;
  readonly breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetColors>;
  readonly default: Maybe<SitePluginPluginOptionsPresetDefault>;
  readonly fontSizes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fontWeights: Maybe<SitePluginPluginOptionsPresetFontWeights>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetFonts>;
  readonly lineHeights: Maybe<SitePluginPluginOptionsPresetLineHeights>;
  readonly radii: Maybe<SitePluginPluginOptionsPresetRadii>;
  readonly shadows: Maybe<SitePluginPluginOptionsPresetShadows>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetSizes>;
  readonly space: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetStyles>;
};

type SitePluginPluginOptionsPresetBaseColors = {
  readonly white: Maybe<Scalars['String']>;
  readonly black: Maybe<Scalars['String']>;
  readonly gray: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly blue: Maybe<Scalars['String']>;
  readonly indigo: Maybe<Scalars['String']>;
  readonly purple: Maybe<Scalars['String']>;
  readonly pink: Maybe<Scalars['String']>;
  readonly red: Maybe<Scalars['String']>;
  readonly orange: Maybe<Scalars['String']>;
  readonly yellow: Maybe<Scalars['String']>;
  readonly green: Maybe<Scalars['String']>;
  readonly teal: Maybe<Scalars['String']>;
  readonly cyan: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrap = {
  readonly breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetBootstrapColors>;
  readonly space: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetBootstrapFonts>;
  readonly fontSizes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fontWeights: Maybe<SitePluginPluginOptionsPresetBootstrapFontWeights>;
  readonly lineHeights: Maybe<SitePluginPluginOptionsPresetBootstrapLineHeights>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetBootstrapSizes>;
  readonly shadows: Maybe<SitePluginPluginOptionsPresetBootstrapShadows>;
  readonly radii: Maybe<SitePluginPluginOptionsPresetBootstrapRadii>;
  readonly text: Maybe<SitePluginPluginOptionsPresetBootstrapText>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetBootstrapStyles>;
};

type SitePluginPluginOptionsPresetBootstrapColors = {
  readonly white: Maybe<Scalars['String']>;
  readonly black: Maybe<Scalars['String']>;
  readonly gray: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly blue: Maybe<Scalars['String']>;
  readonly indigo: Maybe<Scalars['String']>;
  readonly purple: Maybe<Scalars['String']>;
  readonly pink: Maybe<Scalars['String']>;
  readonly red: Maybe<Scalars['String']>;
  readonly orange: Maybe<Scalars['String']>;
  readonly yellow: Maybe<Scalars['String']>;
  readonly green: Maybe<Scalars['String']>;
  readonly teal: Maybe<Scalars['String']>;
  readonly cyan: Maybe<Scalars['String']>;
  readonly grayDark: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly primary: Maybe<Scalars['String']>;
  readonly secondary: Maybe<Scalars['String']>;
  readonly muted: Maybe<Scalars['String']>;
  readonly success: Maybe<Scalars['String']>;
  readonly info: Maybe<Scalars['String']>;
  readonly warning: Maybe<Scalars['String']>;
  readonly danger: Maybe<Scalars['String']>;
  readonly light: Maybe<Scalars['String']>;
  readonly dark: Maybe<Scalars['String']>;
  readonly textMuted: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapFonts = {
  readonly body: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly monospace: Maybe<Scalars['String']>;
  readonly sans: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapFontWeights = {
  readonly body: Maybe<Scalars['Int']>;
  readonly heading: Maybe<Scalars['Int']>;
  readonly bold: Maybe<Scalars['Int']>;
  readonly light: Maybe<Scalars['Int']>;
  readonly normal: Maybe<Scalars['Int']>;
  readonly display: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapLineHeights = {
  readonly body: Maybe<Scalars['Float']>;
  readonly heading: Maybe<Scalars['Float']>;
};

type SitePluginPluginOptionsPresetBootstrapSizes = {
  readonly sm: Maybe<Scalars['Int']>;
  readonly md: Maybe<Scalars['Int']>;
  readonly lg: Maybe<Scalars['Int']>;
  readonly xl: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapShadows = {
  readonly default: Maybe<Scalars['String']>;
  readonly sm: Maybe<Scalars['String']>;
  readonly lg: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapRadii = {
  readonly default: Maybe<Scalars['String']>;
  readonly sm: Maybe<Scalars['String']>;
  readonly lg: Maybe<Scalars['String']>;
  readonly pill: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapText = {
  readonly heading: Maybe<SitePluginPluginOptionsPresetBootstrapTextHeading>;
  readonly display: Maybe<SitePluginPluginOptionsPresetBootstrapTextDisplay>;
};

type SitePluginPluginOptionsPresetBootstrapTextHeading = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapTextDisplay = {
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStyles = {
  readonly root: Maybe<SitePluginPluginOptionsPresetBootstrapStylesRoot>;
  readonly a: Maybe<SitePluginPluginOptionsPresetBootstrapStylesA>;
  readonly p: Maybe<SitePluginPluginOptionsPresetBootstrapStylesP>;
  readonly h1: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH1>;
  readonly h2: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH2>;
  readonly h3: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH3>;
  readonly h4: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH4>;
  readonly h5: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH5>;
  readonly h6: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH6>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetBootstrapStylesBlockquote>;
  readonly table: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTable>;
  readonly th: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTh>;
  readonly td: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTd>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetBootstrapStylesInlineCode>;
  readonly img: Maybe<SitePluginPluginOptionsPresetBootstrapStylesImg>;
};

type SitePluginPluginOptionsPresetBootstrapStylesRoot = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesA = {
  readonly color: Maybe<Scalars['String']>;
  readonly textDecoration: Maybe<Scalars['String']>;
  readonly _hover: Maybe<SitePluginPluginOptionsPresetBootstrapStylesA_hover>;
};

type SitePluginPluginOptionsPresetBootstrapStylesA_hover = {
  readonly textDecoration: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesP = {
  readonly mb: Maybe<Scalars['Int']>;
  readonly lineHeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH1 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH2 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH3 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH4 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH5 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH6 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesBlockquote = {
  readonly fontSize: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesTable = {
  readonly width: Maybe<Scalars['String']>;
  readonly marginBottom: Maybe<Scalars['Int']>;
  readonly color: Maybe<Scalars['String']>;
  readonly borderCollapse: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesTh = {
  readonly verticalAlign: Maybe<Scalars['String']>;
  readonly borderTopWidth: Maybe<Scalars['Int']>;
  readonly borderTopStyle: Maybe<Scalars['String']>;
  readonly borderTopColor: Maybe<Scalars['String']>;
  readonly borderBottomWidth: Maybe<Scalars['Int']>;
  readonly borderBottomStyle: Maybe<Scalars['String']>;
  readonly borderBottomColor: Maybe<Scalars['String']>;
  readonly padding: Maybe<Scalars['String']>;
  readonly textAlign: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesTd = {
  readonly borderBottomWidth: Maybe<Scalars['Int']>;
  readonly borderBottomStyle: Maybe<Scalars['String']>;
  readonly borderBottomColor: Maybe<Scalars['String']>;
  readonly verticalAlign: Maybe<Scalars['String']>;
  readonly padding: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesInlineCode = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetBootstrapStylesImg = {
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetColors = {
  readonly white: Maybe<Scalars['String']>;
  readonly black: Maybe<Scalars['String']>;
  readonly gray: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly blue: Maybe<Scalars['String']>;
  readonly indigo: Maybe<Scalars['String']>;
  readonly purple: Maybe<Scalars['String']>;
  readonly pink: Maybe<Scalars['String']>;
  readonly red: Maybe<Scalars['String']>;
  readonly orange: Maybe<Scalars['String']>;
  readonly yellow: Maybe<Scalars['String']>;
  readonly green: Maybe<Scalars['String']>;
  readonly teal: Maybe<Scalars['String']>;
  readonly cyan: Maybe<Scalars['String']>;
  readonly grayDark: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly primary: Maybe<Scalars['String']>;
  readonly secondary: Maybe<Scalars['String']>;
  readonly muted: Maybe<Scalars['String']>;
  readonly success: Maybe<Scalars['String']>;
  readonly info: Maybe<Scalars['String']>;
  readonly warning: Maybe<Scalars['String']>;
  readonly danger: Maybe<Scalars['String']>;
  readonly light: Maybe<Scalars['String']>;
  readonly dark: Maybe<Scalars['String']>;
  readonly textMuted: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefault = {
  readonly breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetDefaultColors>;
  readonly space: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetDefaultFonts>;
  readonly fontSizes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly fontWeights: Maybe<SitePluginPluginOptionsPresetDefaultFontWeights>;
  readonly lineHeights: Maybe<SitePluginPluginOptionsPresetDefaultLineHeights>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetDefaultSizes>;
  readonly shadows: Maybe<SitePluginPluginOptionsPresetDefaultShadows>;
  readonly radii: Maybe<SitePluginPluginOptionsPresetDefaultRadii>;
  readonly text: Maybe<SitePluginPluginOptionsPresetDefaultText>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetDefaultStyles>;
};

type SitePluginPluginOptionsPresetDefaultColors = {
  readonly white: Maybe<Scalars['String']>;
  readonly black: Maybe<Scalars['String']>;
  readonly gray: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly blue: Maybe<Scalars['String']>;
  readonly indigo: Maybe<Scalars['String']>;
  readonly purple: Maybe<Scalars['String']>;
  readonly pink: Maybe<Scalars['String']>;
  readonly red: Maybe<Scalars['String']>;
  readonly orange: Maybe<Scalars['String']>;
  readonly yellow: Maybe<Scalars['String']>;
  readonly green: Maybe<Scalars['String']>;
  readonly teal: Maybe<Scalars['String']>;
  readonly cyan: Maybe<Scalars['String']>;
  readonly grayDark: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly primary: Maybe<Scalars['String']>;
  readonly secondary: Maybe<Scalars['String']>;
  readonly muted: Maybe<Scalars['String']>;
  readonly success: Maybe<Scalars['String']>;
  readonly info: Maybe<Scalars['String']>;
  readonly warning: Maybe<Scalars['String']>;
  readonly danger: Maybe<Scalars['String']>;
  readonly light: Maybe<Scalars['String']>;
  readonly dark: Maybe<Scalars['String']>;
  readonly textMuted: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultFonts = {
  readonly body: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly monospace: Maybe<Scalars['String']>;
  readonly sans: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultFontWeights = {
  readonly body: Maybe<Scalars['Int']>;
  readonly heading: Maybe<Scalars['Int']>;
  readonly bold: Maybe<Scalars['Int']>;
  readonly light: Maybe<Scalars['Int']>;
  readonly normal: Maybe<Scalars['Int']>;
  readonly display: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultLineHeights = {
  readonly body: Maybe<Scalars['Float']>;
  readonly heading: Maybe<Scalars['Float']>;
};

type SitePluginPluginOptionsPresetDefaultSizes = {
  readonly sm: Maybe<Scalars['Int']>;
  readonly md: Maybe<Scalars['Int']>;
  readonly lg: Maybe<Scalars['Int']>;
  readonly xl: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultShadows = {
  readonly default: Maybe<Scalars['String']>;
  readonly sm: Maybe<Scalars['String']>;
  readonly lg: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultRadii = {
  readonly default: Maybe<Scalars['String']>;
  readonly sm: Maybe<Scalars['String']>;
  readonly lg: Maybe<Scalars['String']>;
  readonly pill: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultText = {
  readonly heading: Maybe<SitePluginPluginOptionsPresetDefaultTextHeading>;
  readonly display: Maybe<SitePluginPluginOptionsPresetDefaultTextDisplay>;
};

type SitePluginPluginOptionsPresetDefaultTextHeading = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultTextDisplay = {
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStyles = {
  readonly root: Maybe<SitePluginPluginOptionsPresetDefaultStylesRoot>;
  readonly a: Maybe<SitePluginPluginOptionsPresetDefaultStylesA>;
  readonly p: Maybe<SitePluginPluginOptionsPresetDefaultStylesP>;
  readonly h1: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1>;
  readonly h2: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2>;
  readonly h3: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3>;
  readonly h4: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4>;
  readonly h5: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5>;
  readonly h6: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetDefaultStylesBlockquote>;
  readonly table: Maybe<SitePluginPluginOptionsPresetDefaultStylesTable>;
  readonly th: Maybe<SitePluginPluginOptionsPresetDefaultStylesTh>;
  readonly td: Maybe<SitePluginPluginOptionsPresetDefaultStylesTd>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetDefaultStylesInlineCode>;
  readonly img: Maybe<SitePluginPluginOptionsPresetDefaultStylesImg>;
};

type SitePluginPluginOptionsPresetDefaultStylesRoot = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesA = {
  readonly color: Maybe<Scalars['String']>;
  readonly textDecoration: Maybe<Scalars['String']>;
  readonly _hover: Maybe<SitePluginPluginOptionsPresetDefaultStylesA_hover>;
};

type SitePluginPluginOptionsPresetDefaultStylesA_hover = {
  readonly textDecoration: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesP = {
  readonly mb: Maybe<Scalars['Int']>;
  readonly lineHeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesH1 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesH2 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesH3 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesH4 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesH5 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesH6 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesBlockquote = {
  readonly fontSize: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetDefaultStylesTable = {
  readonly width: Maybe<Scalars['String']>;
  readonly marginBottom: Maybe<Scalars['Int']>;
  readonly color: Maybe<Scalars['String']>;
  readonly borderCollapse: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesTh = {
  readonly verticalAlign: Maybe<Scalars['String']>;
  readonly borderTopWidth: Maybe<Scalars['Int']>;
  readonly borderTopStyle: Maybe<Scalars['String']>;
  readonly borderTopColor: Maybe<Scalars['String']>;
  readonly borderBottomWidth: Maybe<Scalars['Int']>;
  readonly borderBottomStyle: Maybe<Scalars['String']>;
  readonly borderBottomColor: Maybe<Scalars['String']>;
  readonly padding: Maybe<Scalars['String']>;
  readonly textAlign: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesTd = {
  readonly borderBottomWidth: Maybe<Scalars['Int']>;
  readonly borderBottomStyle: Maybe<Scalars['String']>;
  readonly borderBottomColor: Maybe<Scalars['String']>;
  readonly verticalAlign: Maybe<Scalars['String']>;
  readonly padding: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesInlineCode = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetDefaultStylesImg = {
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetFontWeights = {
  readonly body: Maybe<Scalars['Int']>;
  readonly heading: Maybe<Scalars['Int']>;
  readonly bold: Maybe<Scalars['Int']>;
  readonly light: Maybe<Scalars['Int']>;
  readonly normal: Maybe<Scalars['Int']>;
  readonly display: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetFonts = {
  readonly body: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly monospace: Maybe<Scalars['String']>;
  readonly sans: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetLineHeights = {
  readonly body: Maybe<Scalars['Float']>;
  readonly heading: Maybe<Scalars['Float']>;
};

type SitePluginPluginOptionsPresetRadii = {
  readonly default: Maybe<Scalars['String']>;
  readonly sm: Maybe<Scalars['String']>;
  readonly lg: Maybe<Scalars['String']>;
  readonly pill: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetShadows = {
  readonly default: Maybe<Scalars['String']>;
  readonly sm: Maybe<Scalars['String']>;
  readonly lg: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetSizes = {
  readonly sm: Maybe<Scalars['Int']>;
  readonly md: Maybe<Scalars['Int']>;
  readonly lg: Maybe<Scalars['Int']>;
  readonly xl: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStyles = {
  readonly root: Maybe<SitePluginPluginOptionsPresetStylesRoot>;
  readonly a: Maybe<SitePluginPluginOptionsPresetStylesA>;
  readonly p: Maybe<SitePluginPluginOptionsPresetStylesP>;
  readonly h1: Maybe<SitePluginPluginOptionsPresetStylesH1>;
  readonly h2: Maybe<SitePluginPluginOptionsPresetStylesH2>;
  readonly h3: Maybe<SitePluginPluginOptionsPresetStylesH3>;
  readonly h4: Maybe<SitePluginPluginOptionsPresetStylesH4>;
  readonly h5: Maybe<SitePluginPluginOptionsPresetStylesH5>;
  readonly h6: Maybe<SitePluginPluginOptionsPresetStylesH6>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetStylesBlockquote>;
  readonly table: Maybe<SitePluginPluginOptionsPresetStylesTable>;
  readonly th: Maybe<SitePluginPluginOptionsPresetStylesTh>;
  readonly td: Maybe<SitePluginPluginOptionsPresetStylesTd>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetStylesInlineCode>;
  readonly img: Maybe<SitePluginPluginOptionsPresetStylesImg>;
};

type SitePluginPluginOptionsPresetStylesRoot = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesA = {
  readonly color: Maybe<Scalars['String']>;
  readonly textDecoration: Maybe<Scalars['String']>;
  readonly _hover: Maybe<SitePluginPluginOptionsPresetStylesA_hover>;
};

type SitePluginPluginOptionsPresetStylesA_hover = {
  readonly textDecoration: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesP = {
  readonly mb: Maybe<Scalars['Int']>;
  readonly lineHeight: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesH1 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesH2 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesH3 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesH4 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesH5 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesH6 = {
  readonly fontFamily: Maybe<Scalars['String']>;
  readonly fontWeight: Maybe<Scalars['String']>;
  readonly lineHeight: Maybe<Scalars['String']>;
  readonly mt: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
  readonly fontSize: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesBlockquote = {
  readonly fontSize: Maybe<Scalars['Int']>;
  readonly mb: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsPresetStylesTable = {
  readonly width: Maybe<Scalars['String']>;
  readonly marginBottom: Maybe<Scalars['Int']>;
  readonly color: Maybe<Scalars['String']>;
  readonly borderCollapse: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesTh = {
  readonly verticalAlign: Maybe<Scalars['String']>;
  readonly borderTopWidth: Maybe<Scalars['Int']>;
  readonly borderTopStyle: Maybe<Scalars['String']>;
  readonly borderTopColor: Maybe<Scalars['String']>;
  readonly borderBottomWidth: Maybe<Scalars['Int']>;
  readonly borderBottomStyle: Maybe<Scalars['String']>;
  readonly borderBottomColor: Maybe<Scalars['String']>;
  readonly padding: Maybe<Scalars['String']>;
  readonly textAlign: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesTd = {
  readonly borderBottomWidth: Maybe<Scalars['Int']>;
  readonly borderBottomStyle: Maybe<Scalars['String']>;
  readonly borderBottomColor: Maybe<Scalars['String']>;
  readonly verticalAlign: Maybe<Scalars['String']>;
  readonly padding: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesInlineCode = {
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPresetStylesImg = {
  readonly maxWidth: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
  readonly src___generated___gatsby_schema_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ThemeUiConfig = Node & {
  readonly preset: Maybe<Scalars['JSON']>;
  readonly prismPreset: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly themeUiConfig: Maybe<ThemeUiConfig>;
  readonly allThemeUiConfig: ThemeUiConfigConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_themeUiConfigArgs = {
  preset: Maybe<JSONQueryOperatorInput>;
  prismPreset: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allThemeUiConfigArgs = {
  filter: Maybe<ThemeUiConfigFilterInput>;
  sort: Maybe<ThemeUiConfigSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.keywords'
  | 'siteMetadata.author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly preset: Maybe<SitePluginPluginOptionsPresetFilterInput>;
  readonly basePath: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetFilterInput = {
  readonly baseColors: Maybe<SitePluginPluginOptionsPresetBaseColorsFilterInput>;
  readonly bootstrap: Maybe<SitePluginPluginOptionsPresetBootstrapFilterInput>;
  readonly breakpoints: Maybe<StringQueryOperatorInput>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetColorsFilterInput>;
  readonly default: Maybe<SitePluginPluginOptionsPresetDefaultFilterInput>;
  readonly fontSizes: Maybe<StringQueryOperatorInput>;
  readonly fontWeights: Maybe<SitePluginPluginOptionsPresetFontWeightsFilterInput>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetFontsFilterInput>;
  readonly lineHeights: Maybe<SitePluginPluginOptionsPresetLineHeightsFilterInput>;
  readonly radii: Maybe<SitePluginPluginOptionsPresetRadiiFilterInput>;
  readonly shadows: Maybe<SitePluginPluginOptionsPresetShadowsFilterInput>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetSizesFilterInput>;
  readonly space: Maybe<StringQueryOperatorInput>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetStylesFilterInput>;
};

type SitePluginPluginOptionsPresetBaseColorsFilterInput = {
  readonly white: Maybe<StringQueryOperatorInput>;
  readonly black: Maybe<StringQueryOperatorInput>;
  readonly gray: Maybe<StringQueryOperatorInput>;
  readonly blue: Maybe<StringQueryOperatorInput>;
  readonly indigo: Maybe<StringQueryOperatorInput>;
  readonly purple: Maybe<StringQueryOperatorInput>;
  readonly pink: Maybe<StringQueryOperatorInput>;
  readonly red: Maybe<StringQueryOperatorInput>;
  readonly orange: Maybe<StringQueryOperatorInput>;
  readonly yellow: Maybe<StringQueryOperatorInput>;
  readonly green: Maybe<StringQueryOperatorInput>;
  readonly teal: Maybe<StringQueryOperatorInput>;
  readonly cyan: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapFilterInput = {
  readonly breakpoints: Maybe<StringQueryOperatorInput>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetBootstrapColorsFilterInput>;
  readonly space: Maybe<StringQueryOperatorInput>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetBootstrapFontsFilterInput>;
  readonly fontSizes: Maybe<StringQueryOperatorInput>;
  readonly fontWeights: Maybe<SitePluginPluginOptionsPresetBootstrapFontWeightsFilterInput>;
  readonly lineHeights: Maybe<SitePluginPluginOptionsPresetBootstrapLineHeightsFilterInput>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetBootstrapSizesFilterInput>;
  readonly shadows: Maybe<SitePluginPluginOptionsPresetBootstrapShadowsFilterInput>;
  readonly radii: Maybe<SitePluginPluginOptionsPresetBootstrapRadiiFilterInput>;
  readonly text: Maybe<SitePluginPluginOptionsPresetBootstrapTextFilterInput>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetBootstrapStylesFilterInput>;
};

type SitePluginPluginOptionsPresetBootstrapColorsFilterInput = {
  readonly white: Maybe<StringQueryOperatorInput>;
  readonly black: Maybe<StringQueryOperatorInput>;
  readonly gray: Maybe<StringQueryOperatorInput>;
  readonly blue: Maybe<StringQueryOperatorInput>;
  readonly indigo: Maybe<StringQueryOperatorInput>;
  readonly purple: Maybe<StringQueryOperatorInput>;
  readonly pink: Maybe<StringQueryOperatorInput>;
  readonly red: Maybe<StringQueryOperatorInput>;
  readonly orange: Maybe<StringQueryOperatorInput>;
  readonly yellow: Maybe<StringQueryOperatorInput>;
  readonly green: Maybe<StringQueryOperatorInput>;
  readonly teal: Maybe<StringQueryOperatorInput>;
  readonly cyan: Maybe<StringQueryOperatorInput>;
  readonly grayDark: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<StringQueryOperatorInput>;
  readonly secondary: Maybe<StringQueryOperatorInput>;
  readonly muted: Maybe<StringQueryOperatorInput>;
  readonly success: Maybe<StringQueryOperatorInput>;
  readonly info: Maybe<StringQueryOperatorInput>;
  readonly warning: Maybe<StringQueryOperatorInput>;
  readonly danger: Maybe<StringQueryOperatorInput>;
  readonly light: Maybe<StringQueryOperatorInput>;
  readonly dark: Maybe<StringQueryOperatorInput>;
  readonly textMuted: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapFontsFilterInput = {
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly monospace: Maybe<StringQueryOperatorInput>;
  readonly sans: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapFontWeightsFilterInput = {
  readonly body: Maybe<IntQueryOperatorInput>;
  readonly heading: Maybe<IntQueryOperatorInput>;
  readonly bold: Maybe<IntQueryOperatorInput>;
  readonly light: Maybe<IntQueryOperatorInput>;
  readonly normal: Maybe<IntQueryOperatorInput>;
  readonly display: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapLineHeightsFilterInput = {
  readonly body: Maybe<FloatQueryOperatorInput>;
  readonly heading: Maybe<FloatQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapSizesFilterInput = {
  readonly sm: Maybe<IntQueryOperatorInput>;
  readonly md: Maybe<IntQueryOperatorInput>;
  readonly lg: Maybe<IntQueryOperatorInput>;
  readonly xl: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapShadowsFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly sm: Maybe<StringQueryOperatorInput>;
  readonly lg: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapRadiiFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly sm: Maybe<StringQueryOperatorInput>;
  readonly lg: Maybe<StringQueryOperatorInput>;
  readonly pill: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapTextFilterInput = {
  readonly heading: Maybe<SitePluginPluginOptionsPresetBootstrapTextHeadingFilterInput>;
  readonly display: Maybe<SitePluginPluginOptionsPresetBootstrapTextDisplayFilterInput>;
};

type SitePluginPluginOptionsPresetBootstrapTextHeadingFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapTextDisplayFilterInput = {
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesFilterInput = {
  readonly root: Maybe<SitePluginPluginOptionsPresetBootstrapStylesRootFilterInput>;
  readonly a: Maybe<SitePluginPluginOptionsPresetBootstrapStylesAFilterInput>;
  readonly p: Maybe<SitePluginPluginOptionsPresetBootstrapStylesPFilterInput>;
  readonly h1: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH1FilterInput>;
  readonly h2: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH2FilterInput>;
  readonly h3: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH3FilterInput>;
  readonly h4: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH4FilterInput>;
  readonly h5: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH5FilterInput>;
  readonly h6: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH6FilterInput>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetBootstrapStylesBlockquoteFilterInput>;
  readonly table: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTableFilterInput>;
  readonly th: Maybe<SitePluginPluginOptionsPresetBootstrapStylesThFilterInput>;
  readonly td: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTdFilterInput>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetBootstrapStylesInlineCodeFilterInput>;
  readonly img: Maybe<SitePluginPluginOptionsPresetBootstrapStylesImgFilterInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesRootFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesAFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
  readonly _hover: Maybe<SitePluginPluginOptionsPresetBootstrapStylesA_hoverFilterInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesA_hoverFilterInput = {
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesPFilterInput = {
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH1FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH2FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH3FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH4FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH5FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesH6FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesBlockquoteFilterInput = {
  readonly fontSize: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesTableFilterInput = {
  readonly width: Maybe<StringQueryOperatorInput>;
  readonly marginBottom: Maybe<IntQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly borderCollapse: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesThFilterInput = {
  readonly verticalAlign: Maybe<StringQueryOperatorInput>;
  readonly borderTopWidth: Maybe<IntQueryOperatorInput>;
  readonly borderTopStyle: Maybe<StringQueryOperatorInput>;
  readonly borderTopColor: Maybe<StringQueryOperatorInput>;
  readonly borderBottomWidth: Maybe<IntQueryOperatorInput>;
  readonly borderBottomStyle: Maybe<StringQueryOperatorInput>;
  readonly borderBottomColor: Maybe<StringQueryOperatorInput>;
  readonly padding: Maybe<StringQueryOperatorInput>;
  readonly textAlign: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesTdFilterInput = {
  readonly borderBottomWidth: Maybe<IntQueryOperatorInput>;
  readonly borderBottomStyle: Maybe<StringQueryOperatorInput>;
  readonly borderBottomColor: Maybe<StringQueryOperatorInput>;
  readonly verticalAlign: Maybe<StringQueryOperatorInput>;
  readonly padding: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesInlineCodeFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetBootstrapStylesImgFilterInput = {
  readonly maxWidth: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetColorsFilterInput = {
  readonly white: Maybe<StringQueryOperatorInput>;
  readonly black: Maybe<StringQueryOperatorInput>;
  readonly gray: Maybe<StringQueryOperatorInput>;
  readonly blue: Maybe<StringQueryOperatorInput>;
  readonly indigo: Maybe<StringQueryOperatorInput>;
  readonly purple: Maybe<StringQueryOperatorInput>;
  readonly pink: Maybe<StringQueryOperatorInput>;
  readonly red: Maybe<StringQueryOperatorInput>;
  readonly orange: Maybe<StringQueryOperatorInput>;
  readonly yellow: Maybe<StringQueryOperatorInput>;
  readonly green: Maybe<StringQueryOperatorInput>;
  readonly teal: Maybe<StringQueryOperatorInput>;
  readonly cyan: Maybe<StringQueryOperatorInput>;
  readonly grayDark: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<StringQueryOperatorInput>;
  readonly secondary: Maybe<StringQueryOperatorInput>;
  readonly muted: Maybe<StringQueryOperatorInput>;
  readonly success: Maybe<StringQueryOperatorInput>;
  readonly info: Maybe<StringQueryOperatorInput>;
  readonly warning: Maybe<StringQueryOperatorInput>;
  readonly danger: Maybe<StringQueryOperatorInput>;
  readonly light: Maybe<StringQueryOperatorInput>;
  readonly dark: Maybe<StringQueryOperatorInput>;
  readonly textMuted: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultFilterInput = {
  readonly breakpoints: Maybe<StringQueryOperatorInput>;
  readonly colors: Maybe<SitePluginPluginOptionsPresetDefaultColorsFilterInput>;
  readonly space: Maybe<StringQueryOperatorInput>;
  readonly fonts: Maybe<SitePluginPluginOptionsPresetDefaultFontsFilterInput>;
  readonly fontSizes: Maybe<StringQueryOperatorInput>;
  readonly fontWeights: Maybe<SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput>;
  readonly lineHeights: Maybe<SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput>;
  readonly sizes: Maybe<SitePluginPluginOptionsPresetDefaultSizesFilterInput>;
  readonly shadows: Maybe<SitePluginPluginOptionsPresetDefaultShadowsFilterInput>;
  readonly radii: Maybe<SitePluginPluginOptionsPresetDefaultRadiiFilterInput>;
  readonly text: Maybe<SitePluginPluginOptionsPresetDefaultTextFilterInput>;
  readonly styles: Maybe<SitePluginPluginOptionsPresetDefaultStylesFilterInput>;
};

type SitePluginPluginOptionsPresetDefaultColorsFilterInput = {
  readonly white: Maybe<StringQueryOperatorInput>;
  readonly black: Maybe<StringQueryOperatorInput>;
  readonly gray: Maybe<StringQueryOperatorInput>;
  readonly blue: Maybe<StringQueryOperatorInput>;
  readonly indigo: Maybe<StringQueryOperatorInput>;
  readonly purple: Maybe<StringQueryOperatorInput>;
  readonly pink: Maybe<StringQueryOperatorInput>;
  readonly red: Maybe<StringQueryOperatorInput>;
  readonly orange: Maybe<StringQueryOperatorInput>;
  readonly yellow: Maybe<StringQueryOperatorInput>;
  readonly green: Maybe<StringQueryOperatorInput>;
  readonly teal: Maybe<StringQueryOperatorInput>;
  readonly cyan: Maybe<StringQueryOperatorInput>;
  readonly grayDark: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<StringQueryOperatorInput>;
  readonly secondary: Maybe<StringQueryOperatorInput>;
  readonly muted: Maybe<StringQueryOperatorInput>;
  readonly success: Maybe<StringQueryOperatorInput>;
  readonly info: Maybe<StringQueryOperatorInput>;
  readonly warning: Maybe<StringQueryOperatorInput>;
  readonly danger: Maybe<StringQueryOperatorInput>;
  readonly light: Maybe<StringQueryOperatorInput>;
  readonly dark: Maybe<StringQueryOperatorInput>;
  readonly textMuted: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultFontsFilterInput = {
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly monospace: Maybe<StringQueryOperatorInput>;
  readonly sans: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput = {
  readonly body: Maybe<IntQueryOperatorInput>;
  readonly heading: Maybe<IntQueryOperatorInput>;
  readonly bold: Maybe<IntQueryOperatorInput>;
  readonly light: Maybe<IntQueryOperatorInput>;
  readonly normal: Maybe<IntQueryOperatorInput>;
  readonly display: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput = {
  readonly body: Maybe<FloatQueryOperatorInput>;
  readonly heading: Maybe<FloatQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultSizesFilterInput = {
  readonly sm: Maybe<IntQueryOperatorInput>;
  readonly md: Maybe<IntQueryOperatorInput>;
  readonly lg: Maybe<IntQueryOperatorInput>;
  readonly xl: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultShadowsFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly sm: Maybe<StringQueryOperatorInput>;
  readonly lg: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultRadiiFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly sm: Maybe<StringQueryOperatorInput>;
  readonly lg: Maybe<StringQueryOperatorInput>;
  readonly pill: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultTextFilterInput = {
  readonly heading: Maybe<SitePluginPluginOptionsPresetDefaultTextHeadingFilterInput>;
  readonly display: Maybe<SitePluginPluginOptionsPresetDefaultTextDisplayFilterInput>;
};

type SitePluginPluginOptionsPresetDefaultTextHeadingFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultTextDisplayFilterInput = {
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesFilterInput = {
  readonly root: Maybe<SitePluginPluginOptionsPresetDefaultStylesRootFilterInput>;
  readonly a: Maybe<SitePluginPluginOptionsPresetDefaultStylesAFilterInput>;
  readonly p: Maybe<SitePluginPluginOptionsPresetDefaultStylesPFilterInput>;
  readonly h1: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1FilterInput>;
  readonly h2: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2FilterInput>;
  readonly h3: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3FilterInput>;
  readonly h4: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4FilterInput>;
  readonly h5: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5FilterInput>;
  readonly h6: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6FilterInput>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetDefaultStylesBlockquoteFilterInput>;
  readonly table: Maybe<SitePluginPluginOptionsPresetDefaultStylesTableFilterInput>;
  readonly th: Maybe<SitePluginPluginOptionsPresetDefaultStylesThFilterInput>;
  readonly td: Maybe<SitePluginPluginOptionsPresetDefaultStylesTdFilterInput>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetDefaultStylesInlineCodeFilterInput>;
  readonly img: Maybe<SitePluginPluginOptionsPresetDefaultStylesImgFilterInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesRootFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesAFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
  readonly _hover: Maybe<SitePluginPluginOptionsPresetDefaultStylesA_hoverFilterInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesA_hoverFilterInput = {
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesPFilterInput = {
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesH1FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesH2FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesH3FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesH4FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesH5FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesH6FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesBlockquoteFilterInput = {
  readonly fontSize: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesTableFilterInput = {
  readonly width: Maybe<StringQueryOperatorInput>;
  readonly marginBottom: Maybe<IntQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly borderCollapse: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesThFilterInput = {
  readonly verticalAlign: Maybe<StringQueryOperatorInput>;
  readonly borderTopWidth: Maybe<IntQueryOperatorInput>;
  readonly borderTopStyle: Maybe<StringQueryOperatorInput>;
  readonly borderTopColor: Maybe<StringQueryOperatorInput>;
  readonly borderBottomWidth: Maybe<IntQueryOperatorInput>;
  readonly borderBottomStyle: Maybe<StringQueryOperatorInput>;
  readonly borderBottomColor: Maybe<StringQueryOperatorInput>;
  readonly padding: Maybe<StringQueryOperatorInput>;
  readonly textAlign: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesTdFilterInput = {
  readonly borderBottomWidth: Maybe<IntQueryOperatorInput>;
  readonly borderBottomStyle: Maybe<StringQueryOperatorInput>;
  readonly borderBottomColor: Maybe<StringQueryOperatorInput>;
  readonly verticalAlign: Maybe<StringQueryOperatorInput>;
  readonly padding: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesInlineCodeFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetDefaultStylesImgFilterInput = {
  readonly maxWidth: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetFontWeightsFilterInput = {
  readonly body: Maybe<IntQueryOperatorInput>;
  readonly heading: Maybe<IntQueryOperatorInput>;
  readonly bold: Maybe<IntQueryOperatorInput>;
  readonly light: Maybe<IntQueryOperatorInput>;
  readonly normal: Maybe<IntQueryOperatorInput>;
  readonly display: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetFontsFilterInput = {
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly monospace: Maybe<StringQueryOperatorInput>;
  readonly sans: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetLineHeightsFilterInput = {
  readonly body: Maybe<FloatQueryOperatorInput>;
  readonly heading: Maybe<FloatQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetRadiiFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly sm: Maybe<StringQueryOperatorInput>;
  readonly lg: Maybe<StringQueryOperatorInput>;
  readonly pill: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetShadowsFilterInput = {
  readonly default: Maybe<StringQueryOperatorInput>;
  readonly sm: Maybe<StringQueryOperatorInput>;
  readonly lg: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetSizesFilterInput = {
  readonly sm: Maybe<IntQueryOperatorInput>;
  readonly md: Maybe<IntQueryOperatorInput>;
  readonly lg: Maybe<IntQueryOperatorInput>;
  readonly xl: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesFilterInput = {
  readonly root: Maybe<SitePluginPluginOptionsPresetStylesRootFilterInput>;
  readonly a: Maybe<SitePluginPluginOptionsPresetStylesAFilterInput>;
  readonly p: Maybe<SitePluginPluginOptionsPresetStylesPFilterInput>;
  readonly h1: Maybe<SitePluginPluginOptionsPresetStylesH1FilterInput>;
  readonly h2: Maybe<SitePluginPluginOptionsPresetStylesH2FilterInput>;
  readonly h3: Maybe<SitePluginPluginOptionsPresetStylesH3FilterInput>;
  readonly h4: Maybe<SitePluginPluginOptionsPresetStylesH4FilterInput>;
  readonly h5: Maybe<SitePluginPluginOptionsPresetStylesH5FilterInput>;
  readonly h6: Maybe<SitePluginPluginOptionsPresetStylesH6FilterInput>;
  readonly blockquote: Maybe<SitePluginPluginOptionsPresetStylesBlockquoteFilterInput>;
  readonly table: Maybe<SitePluginPluginOptionsPresetStylesTableFilterInput>;
  readonly th: Maybe<SitePluginPluginOptionsPresetStylesThFilterInput>;
  readonly td: Maybe<SitePluginPluginOptionsPresetStylesTdFilterInput>;
  readonly inlineCode: Maybe<SitePluginPluginOptionsPresetStylesInlineCodeFilterInput>;
  readonly img: Maybe<SitePluginPluginOptionsPresetStylesImgFilterInput>;
};

type SitePluginPluginOptionsPresetStylesRootFilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesAFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
  readonly _hover: Maybe<SitePluginPluginOptionsPresetStylesA_hoverFilterInput>;
};

type SitePluginPluginOptionsPresetStylesA_hoverFilterInput = {
  readonly textDecoration: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesPFilterInput = {
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesH1FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesH2FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesH3FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesH4FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesH5FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesH6FilterInput = {
  readonly fontFamily: Maybe<StringQueryOperatorInput>;
  readonly fontWeight: Maybe<StringQueryOperatorInput>;
  readonly lineHeight: Maybe<StringQueryOperatorInput>;
  readonly mt: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
  readonly fontSize: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesBlockquoteFilterInput = {
  readonly fontSize: Maybe<IntQueryOperatorInput>;
  readonly mb: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesTableFilterInput = {
  readonly width: Maybe<StringQueryOperatorInput>;
  readonly marginBottom: Maybe<IntQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly borderCollapse: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesThFilterInput = {
  readonly verticalAlign: Maybe<StringQueryOperatorInput>;
  readonly borderTopWidth: Maybe<IntQueryOperatorInput>;
  readonly borderTopStyle: Maybe<StringQueryOperatorInput>;
  readonly borderTopColor: Maybe<StringQueryOperatorInput>;
  readonly borderBottomWidth: Maybe<IntQueryOperatorInput>;
  readonly borderBottomStyle: Maybe<StringQueryOperatorInput>;
  readonly borderBottomColor: Maybe<StringQueryOperatorInput>;
  readonly padding: Maybe<StringQueryOperatorInput>;
  readonly textAlign: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesTdFilterInput = {
  readonly borderBottomWidth: Maybe<IntQueryOperatorInput>;
  readonly borderBottomStyle: Maybe<StringQueryOperatorInput>;
  readonly borderBottomColor: Maybe<StringQueryOperatorInput>;
  readonly verticalAlign: Maybe<StringQueryOperatorInput>;
  readonly padding: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesInlineCodeFilterInput = {
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPresetStylesImgFilterInput = {
  readonly maxWidth: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
  readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.preset.breakpoints'
  | 'pluginCreator.pluginOptions.preset.fontSizes'
  | 'pluginCreator.pluginOptions.preset.space'
  | 'pluginCreator.pluginOptions.basePath'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.component'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.preset.baseColors.white'
  | 'pluginOptions.preset.baseColors.black'
  | 'pluginOptions.preset.baseColors.gray'
  | 'pluginOptions.preset.baseColors.blue'
  | 'pluginOptions.preset.baseColors.indigo'
  | 'pluginOptions.preset.baseColors.purple'
  | 'pluginOptions.preset.baseColors.pink'
  | 'pluginOptions.preset.baseColors.red'
  | 'pluginOptions.preset.baseColors.orange'
  | 'pluginOptions.preset.baseColors.yellow'
  | 'pluginOptions.preset.baseColors.green'
  | 'pluginOptions.preset.baseColors.teal'
  | 'pluginOptions.preset.baseColors.cyan'
  | 'pluginOptions.preset.bootstrap.breakpoints'
  | 'pluginOptions.preset.bootstrap.space'
  | 'pluginOptions.preset.bootstrap.fontSizes'
  | 'pluginOptions.preset.breakpoints'
  | 'pluginOptions.preset.colors.white'
  | 'pluginOptions.preset.colors.black'
  | 'pluginOptions.preset.colors.gray'
  | 'pluginOptions.preset.colors.blue'
  | 'pluginOptions.preset.colors.indigo'
  | 'pluginOptions.preset.colors.purple'
  | 'pluginOptions.preset.colors.pink'
  | 'pluginOptions.preset.colors.red'
  | 'pluginOptions.preset.colors.orange'
  | 'pluginOptions.preset.colors.yellow'
  | 'pluginOptions.preset.colors.green'
  | 'pluginOptions.preset.colors.teal'
  | 'pluginOptions.preset.colors.cyan'
  | 'pluginOptions.preset.colors.grayDark'
  | 'pluginOptions.preset.colors.text'
  | 'pluginOptions.preset.colors.background'
  | 'pluginOptions.preset.colors.primary'
  | 'pluginOptions.preset.colors.secondary'
  | 'pluginOptions.preset.colors.muted'
  | 'pluginOptions.preset.colors.success'
  | 'pluginOptions.preset.colors.info'
  | 'pluginOptions.preset.colors.warning'
  | 'pluginOptions.preset.colors.danger'
  | 'pluginOptions.preset.colors.light'
  | 'pluginOptions.preset.colors.dark'
  | 'pluginOptions.preset.colors.textMuted'
  | 'pluginOptions.preset.default.breakpoints'
  | 'pluginOptions.preset.default.space'
  | 'pluginOptions.preset.default.fontSizes'
  | 'pluginOptions.preset.fontSizes'
  | 'pluginOptions.preset.fontWeights.body'
  | 'pluginOptions.preset.fontWeights.heading'
  | 'pluginOptions.preset.fontWeights.bold'
  | 'pluginOptions.preset.fontWeights.light'
  | 'pluginOptions.preset.fontWeights.normal'
  | 'pluginOptions.preset.fontWeights.display'
  | 'pluginOptions.preset.fonts.body'
  | 'pluginOptions.preset.fonts.heading'
  | 'pluginOptions.preset.fonts.monospace'
  | 'pluginOptions.preset.fonts.sans'
  | 'pluginOptions.preset.lineHeights.body'
  | 'pluginOptions.preset.lineHeights.heading'
  | 'pluginOptions.preset.radii.default'
  | 'pluginOptions.preset.radii.sm'
  | 'pluginOptions.preset.radii.lg'
  | 'pluginOptions.preset.radii.pill'
  | 'pluginOptions.preset.shadows.default'
  | 'pluginOptions.preset.shadows.sm'
  | 'pluginOptions.preset.shadows.lg'
  | 'pluginOptions.preset.sizes.sm'
  | 'pluginOptions.preset.sizes.md'
  | 'pluginOptions.preset.sizes.lg'
  | 'pluginOptions.preset.sizes.xl'
  | 'pluginOptions.preset.space'
  | 'pluginOptions.basePath'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.component'
  | 'pluginOptions.path'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ThemeUiConfigConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
};


type ThemeUiConfigConnection_distinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_maxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_minArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_sumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

type ThemeUiConfigEdge = {
  readonly next: Maybe<ThemeUiConfig>;
  readonly node: ThemeUiConfig;
  readonly previous: Maybe<ThemeUiConfig>;
};

type ThemeUiConfigFieldsEnum =
  | 'preset'
  | 'prismPreset'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ThemeUiConfigGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ThemeUiConfigEdge>;
  readonly nodes: ReadonlyArray<ThemeUiConfig>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ThemeUiConfigGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ThemeUiConfigGroupConnection_distinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_maxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_minArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_sumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


type ThemeUiConfigGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

type ThemeUiConfigFilterInput = {
  readonly preset: Maybe<JSONQueryOperatorInput>;
  readonly prismPreset: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ThemeUiConfigSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ThemeUiConfigFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author' | 'description' | 'keywords' | 'siteUrl' | 'title'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly themeUiConfig: Maybe<Pick<ThemeUiConfig, 'preset' | 'prismPreset'>> };

}