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
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
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
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
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
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly enableTags: Maybe<Scalars['Boolean']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
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


type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  cornerRadius?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ContentfulImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulBanner = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly image: Maybe<ReadonlyArray<Maybe<ContentfulAsset>>>;
  readonly home_page: Maybe<ReadonlyArray<Maybe<ContentfulHomePage>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulBannerSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulBanner_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBanner_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulBannerSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulBannerSysContentType>;
};

type ContentfulBannerSysContentType = {
  readonly sys: Maybe<ContentfulBannerSysContentTypeSys>;
};

type ContentfulBannerSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulAboutUs = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly sectionTitle: Maybe<Scalars['String']>;
  readonly home_page: Maybe<ReadonlyArray<Maybe<ContentfulHomePage>>>;
  readonly aboutUsDescription: Maybe<contentfulAboutUsAboutUsDescriptionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAboutUsSys>;
  /** Returns all children nodes filtered by type contentfulAboutUsAboutUsDescriptionTextNode */
  readonly childrenContentfulAboutUsAboutUsDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulAboutUsAboutUsDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulAboutUsAboutUsDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulAboutUsAboutUsDescriptionTextNode: Maybe<contentfulAboutUsAboutUsDescriptionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAboutUs_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAboutUs_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulAboutUsSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulAboutUsSysContentType>;
};

type ContentfulAboutUsSysContentType = {
  readonly sys: Maybe<ContentfulAboutUsSysContentTypeSys>;
};

type ContentfulAboutUsSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulActivity = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly activityCategory: Maybe<Scalars['String']>;
  readonly activityImage: Maybe<ContentfulAsset>;
  readonly activity_section: Maybe<ReadonlyArray<Maybe<ContentfulActivitySection>>>;
  readonly activityDescription: Maybe<contentfulActivityActivityDescriptionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulActivitySys>;
  /** Returns all children nodes filtered by type contentfulActivityActivityDescriptionTextNode */
  readonly childrenContentfulActivityActivityDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulActivityActivityDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulActivityActivityDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulActivityActivityDescriptionTextNode: Maybe<contentfulActivityActivityDescriptionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulActivity_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulActivity_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulActivitySys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulActivitySysContentType>;
};

type ContentfulActivitySysContentType = {
  readonly sys: Maybe<ContentfulActivitySysContentTypeSys>;
};

type ContentfulActivitySysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulHomePage = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly bannerSection: Maybe<ReadonlyArray<Maybe<ContentfulBanner>>>;
  readonly aboutUsSection: Maybe<ContentfulAboutUs>;
  readonly activitiesSection: Maybe<ReadonlyArray<Maybe<ContentfulActivitySection>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulHomePageSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulHomePage_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulHomePage_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulHomePageSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulHomePageSysContentType>;
};

type ContentfulHomePageSysContentType = {
  readonly sys: Maybe<ContentfulHomePageSysContentTypeSys>;
};

type ContentfulHomePageSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulActivitySection = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly activitySectionTitle: Maybe<Scalars['String']>;
  readonly activity: Maybe<ReadonlyArray<Maybe<ContentfulActivity>>>;
  readonly home_page: Maybe<ReadonlyArray<Maybe<ContentfulHomePage>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulActivitySectionSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulActivitySection_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulActivitySection_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulActivitySectionSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulActivitySectionSysContentType>;
};

type ContentfulActivitySectionSysContentType = {
  readonly sys: Maybe<ContentfulActivitySectionSysContentTypeSys>;
};

type ContentfulActivitySectionSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type contentfulActivityActivityDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly activityDescription: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulActivityActivityDescriptionTextNodeSys>;
};

type contentfulActivityActivityDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAboutUsAboutUsDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly aboutUsDescription: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeSys>;
};

type contentfulAboutUsAboutUsDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
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
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulBanner: Maybe<ContentfulBanner>;
  readonly allContentfulBanner: ContentfulBannerConnection;
  readonly contentfulAboutUs: Maybe<ContentfulAboutUs>;
  readonly allContentfulAboutUs: ContentfulAboutUsConnection;
  readonly contentfulActivity: Maybe<ContentfulActivity>;
  readonly allContentfulActivity: ContentfulActivityConnection;
  readonly contentfulHomePage: Maybe<ContentfulHomePage>;
  readonly allContentfulHomePage: ContentfulHomePageConnection;
  readonly contentfulActivitySection: Maybe<ContentfulActivitySection>;
  readonly allContentfulActivitySection: ContentfulActivitySectionConnection;
  readonly contentfulActivityActivityDescriptionTextNode: Maybe<contentfulActivityActivityDescriptionTextNode>;
  readonly allContentfulActivityActivityDescriptionTextNode: contentfulActivityActivityDescriptionTextNodeConnection;
  readonly contentfulAboutUsAboutUsDescriptionTextNode: Maybe<contentfulAboutUsAboutUsDescriptionTextNode>;
  readonly allContentfulAboutUsAboutUsDescriptionTextNode: contentfulAboutUsAboutUsDescriptionTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
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
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
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


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBannerArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterListInput>;
  home_page: Maybe<ContentfulHomePageFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulBannerSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulBannerArgs = {
  filter: Maybe<ContentfulBannerFilterInput>;
  sort: Maybe<ContentfulBannerSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAboutUsArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sectionTitle: Maybe<StringQueryOperatorInput>;
  home_page: Maybe<ContentfulHomePageFilterListInput>;
  aboutUsDescription: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAboutUsSysFilterInput>;
  childrenContentfulAboutUsAboutUsDescriptionTextNode: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterListInput>;
  childContentfulAboutUsAboutUsDescriptionTextNode: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAboutUsArgs = {
  filter: Maybe<ContentfulAboutUsFilterInput>;
  sort: Maybe<ContentfulAboutUsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulActivityArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  activityCategory: Maybe<StringQueryOperatorInput>;
  activityImage: Maybe<ContentfulAssetFilterInput>;
  activity_section: Maybe<ContentfulActivitySectionFilterListInput>;
  activityDescription: Maybe<contentfulActivityActivityDescriptionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulActivitySysFilterInput>;
  childrenContentfulActivityActivityDescriptionTextNode: Maybe<contentfulActivityActivityDescriptionTextNodeFilterListInput>;
  childContentfulActivityActivityDescriptionTextNode: Maybe<contentfulActivityActivityDescriptionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulActivityArgs = {
  filter: Maybe<ContentfulActivityFilterInput>;
  sort: Maybe<ContentfulActivitySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulHomePageArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  bannerSection: Maybe<ContentfulBannerFilterListInput>;
  aboutUsSection: Maybe<ContentfulAboutUsFilterInput>;
  activitiesSection: Maybe<ContentfulActivitySectionFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulHomePageSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulHomePageArgs = {
  filter: Maybe<ContentfulHomePageFilterInput>;
  sort: Maybe<ContentfulHomePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulActivitySectionArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  activitySectionTitle: Maybe<StringQueryOperatorInput>;
  activity: Maybe<ContentfulActivityFilterListInput>;
  home_page: Maybe<ContentfulHomePageFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulActivitySectionSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulActivitySectionArgs = {
  filter: Maybe<ContentfulActivitySectionFilterInput>;
  sort: Maybe<ContentfulActivitySectionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulActivityActivityDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  activityDescription: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulActivityActivityDescriptionTextNodeSysFilterInput>;
};


type Query_allContentfulActivityActivityDescriptionTextNodeArgs = {
  filter: Maybe<contentfulActivityActivityDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulActivityActivityDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAboutUsAboutUsDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  aboutUsDescription: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeSysFilterInput>;
};


type Query_allContentfulAboutUsAboutUsDescriptionTextNodeArgs = {
  filter: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
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

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
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
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
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
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
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
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
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
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly enableTags: Maybe<BooleanQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
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
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
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
  | 'pluginCreator.pluginOptions.spaceId'
  | 'pluginCreator.pluginOptions.accessToken'
  | 'pluginCreator.pluginOptions.host'
  | 'pluginCreator.pluginOptions.environment'
  | 'pluginCreator.pluginOptions.downloadLocal'
  | 'pluginCreator.pluginOptions.pageLimit'
  | 'pluginCreator.pluginOptions.assetDownloadWorkers'
  | 'pluginCreator.pluginOptions.enableTags'
  | 'pluginCreator.pluginOptions.useNameForId'
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
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
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
  | 'pluginOptions.spaceId'
  | 'pluginOptions.accessToken'
  | 'pluginOptions.host'
  | 'pluginOptions.environment'
  | 'pluginOptions.downloadLocal'
  | 'pluginOptions.pageLimit'
  | 'pluginOptions.assetDownloadWorkers'
  | 'pluginOptions.enableTags'
  | 'pluginOptions.useNameForId'
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

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
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

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
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

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'gatsbyImageData'
  | 'resize.base64'
  | 'resize.tracedSVG'
  | 'resize.src'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
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

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAssetFilterInput>;
};

type ContentfulHomePageFilterListInput = {
  readonly elemMatch: Maybe<ContentfulHomePageFilterInput>;
};

type ContentfulHomePageFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly bannerSection: Maybe<ContentfulBannerFilterListInput>;
  readonly aboutUsSection: Maybe<ContentfulAboutUsFilterInput>;
  readonly activitiesSection: Maybe<ContentfulActivitySectionFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulHomePageSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulBannerFilterListInput = {
  readonly elemMatch: Maybe<ContentfulBannerFilterInput>;
};

type ContentfulBannerFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterListInput>;
  readonly home_page: Maybe<ContentfulHomePageFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulBannerSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulBannerSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulBannerSysContentTypeFilterInput>;
};

type ContentfulBannerSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulBannerSysContentTypeSysFilterInput>;
};

type ContentfulBannerSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulAboutUsFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sectionTitle: Maybe<StringQueryOperatorInput>;
  readonly home_page: Maybe<ContentfulHomePageFilterListInput>;
  readonly aboutUsDescription: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAboutUsSysFilterInput>;
  readonly childrenContentfulAboutUsAboutUsDescriptionTextNode: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterListInput>;
  readonly childContentfulAboutUsAboutUsDescriptionTextNode: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulAboutUsAboutUsDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly aboutUsDescription: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeSysFilterInput>;
};

type contentfulAboutUsAboutUsDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulAboutUsSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulAboutUsSysContentTypeFilterInput>;
};

type ContentfulAboutUsSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulAboutUsSysContentTypeSysFilterInput>;
};

type ContentfulAboutUsSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulAboutUsAboutUsDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
};

type ContentfulActivitySectionFilterListInput = {
  readonly elemMatch: Maybe<ContentfulActivitySectionFilterInput>;
};

type ContentfulActivitySectionFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly activitySectionTitle: Maybe<StringQueryOperatorInput>;
  readonly activity: Maybe<ContentfulActivityFilterListInput>;
  readonly home_page: Maybe<ContentfulHomePageFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulActivitySectionSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulActivityFilterListInput = {
  readonly elemMatch: Maybe<ContentfulActivityFilterInput>;
};

type ContentfulActivityFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly activityCategory: Maybe<StringQueryOperatorInput>;
  readonly activityImage: Maybe<ContentfulAssetFilterInput>;
  readonly activity_section: Maybe<ContentfulActivitySectionFilterListInput>;
  readonly activityDescription: Maybe<contentfulActivityActivityDescriptionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulActivitySysFilterInput>;
  readonly childrenContentfulActivityActivityDescriptionTextNode: Maybe<contentfulActivityActivityDescriptionTextNodeFilterListInput>;
  readonly childContentfulActivityActivityDescriptionTextNode: Maybe<contentfulActivityActivityDescriptionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulActivityActivityDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly activityDescription: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulActivityActivityDescriptionTextNodeSysFilterInput>;
};

type contentfulActivityActivityDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulActivitySysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulActivitySysContentTypeFilterInput>;
};

type ContentfulActivitySysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulActivitySysContentTypeSysFilterInput>;
};

type ContentfulActivitySysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulActivityActivityDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulActivityActivityDescriptionTextNodeFilterInput>;
};

type ContentfulActivitySectionSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulActivitySectionSysContentTypeFilterInput>;
};

type ContentfulActivitySectionSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulActivitySectionSysContentTypeSysFilterInput>;
};

type ContentfulActivitySectionSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulHomePageSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulHomePageSysContentTypeFilterInput>;
};

type ContentfulHomePageSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulHomePageSysContentTypeSysFilterInput>;
};

type ContentfulHomePageSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulBannerConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBannerEdge>;
  readonly nodes: ReadonlyArray<ContentfulBanner>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulBannerGroupConnection>;
};


type ContentfulBannerConnection_distinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerConnection_maxArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerConnection_minArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerConnection_sumArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBannerFieldsEnum;
};

type ContentfulBannerEdge = {
  readonly next: Maybe<ContentfulBanner>;
  readonly node: ContentfulBanner;
  readonly previous: Maybe<ContentfulBanner>;
};

type ContentfulBannerFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'image'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fixed.base64'
  | 'image.fixed.tracedSVG'
  | 'image.fixed.aspectRatio'
  | 'image.fixed.width'
  | 'image.fixed.height'
  | 'image.fixed.src'
  | 'image.fixed.srcSet'
  | 'image.fixed.srcWebp'
  | 'image.fixed.srcSetWebp'
  | 'image.fluid.base64'
  | 'image.fluid.tracedSVG'
  | 'image.fluid.aspectRatio'
  | 'image.fluid.src'
  | 'image.fluid.srcSet'
  | 'image.fluid.srcWebp'
  | 'image.fluid.srcSetWebp'
  | 'image.fluid.sizes'
  | 'image.gatsbyImageData'
  | 'image.resize.base64'
  | 'image.resize.tracedSVG'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.resize.height'
  | 'image.resize.aspectRatio'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'home_page'
  | 'home_page.contentful_id'
  | 'home_page.id'
  | 'home_page.node_locale'
  | 'home_page.bannerSection'
  | 'home_page.bannerSection.contentful_id'
  | 'home_page.bannerSection.id'
  | 'home_page.bannerSection.node_locale'
  | 'home_page.bannerSection.title'
  | 'home_page.bannerSection.image'
  | 'home_page.bannerSection.image.contentful_id'
  | 'home_page.bannerSection.image.id'
  | 'home_page.bannerSection.image.spaceId'
  | 'home_page.bannerSection.image.createdAt'
  | 'home_page.bannerSection.image.updatedAt'
  | 'home_page.bannerSection.image.title'
  | 'home_page.bannerSection.image.description'
  | 'home_page.bannerSection.image.node_locale'
  | 'home_page.bannerSection.image.gatsbyImageData'
  | 'home_page.bannerSection.image.children'
  | 'home_page.bannerSection.home_page'
  | 'home_page.bannerSection.home_page.contentful_id'
  | 'home_page.bannerSection.home_page.id'
  | 'home_page.bannerSection.home_page.node_locale'
  | 'home_page.bannerSection.home_page.bannerSection'
  | 'home_page.bannerSection.home_page.activitiesSection'
  | 'home_page.bannerSection.home_page.spaceId'
  | 'home_page.bannerSection.home_page.createdAt'
  | 'home_page.bannerSection.home_page.updatedAt'
  | 'home_page.bannerSection.home_page.children'
  | 'home_page.bannerSection.spaceId'
  | 'home_page.bannerSection.createdAt'
  | 'home_page.bannerSection.updatedAt'
  | 'home_page.bannerSection.sys.type'
  | 'home_page.bannerSection.sys.revision'
  | 'home_page.bannerSection.parent.id'
  | 'home_page.bannerSection.parent.children'
  | 'home_page.bannerSection.children'
  | 'home_page.bannerSection.children.id'
  | 'home_page.bannerSection.children.children'
  | 'home_page.bannerSection.internal.content'
  | 'home_page.bannerSection.internal.contentDigest'
  | 'home_page.bannerSection.internal.description'
  | 'home_page.bannerSection.internal.fieldOwners'
  | 'home_page.bannerSection.internal.ignoreType'
  | 'home_page.bannerSection.internal.mediaType'
  | 'home_page.bannerSection.internal.owner'
  | 'home_page.bannerSection.internal.type'
  | 'home_page.aboutUsSection.contentful_id'
  | 'home_page.aboutUsSection.id'
  | 'home_page.aboutUsSection.node_locale'
  | 'home_page.aboutUsSection.sectionTitle'
  | 'home_page.aboutUsSection.home_page'
  | 'home_page.aboutUsSection.home_page.contentful_id'
  | 'home_page.aboutUsSection.home_page.id'
  | 'home_page.aboutUsSection.home_page.node_locale'
  | 'home_page.aboutUsSection.home_page.bannerSection'
  | 'home_page.aboutUsSection.home_page.activitiesSection'
  | 'home_page.aboutUsSection.home_page.spaceId'
  | 'home_page.aboutUsSection.home_page.createdAt'
  | 'home_page.aboutUsSection.home_page.updatedAt'
  | 'home_page.aboutUsSection.home_page.children'
  | 'home_page.aboutUsSection.aboutUsDescription.id'
  | 'home_page.aboutUsSection.aboutUsDescription.children'
  | 'home_page.aboutUsSection.aboutUsDescription.aboutUsDescription'
  | 'home_page.aboutUsSection.spaceId'
  | 'home_page.aboutUsSection.createdAt'
  | 'home_page.aboutUsSection.updatedAt'
  | 'home_page.aboutUsSection.sys.type'
  | 'home_page.aboutUsSection.sys.revision'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'home_page.aboutUsSection.parent.id'
  | 'home_page.aboutUsSection.parent.children'
  | 'home_page.aboutUsSection.children'
  | 'home_page.aboutUsSection.children.id'
  | 'home_page.aboutUsSection.children.children'
  | 'home_page.aboutUsSection.internal.content'
  | 'home_page.aboutUsSection.internal.contentDigest'
  | 'home_page.aboutUsSection.internal.description'
  | 'home_page.aboutUsSection.internal.fieldOwners'
  | 'home_page.aboutUsSection.internal.ignoreType'
  | 'home_page.aboutUsSection.internal.mediaType'
  | 'home_page.aboutUsSection.internal.owner'
  | 'home_page.aboutUsSection.internal.type'
  | 'home_page.activitiesSection'
  | 'home_page.activitiesSection.contentful_id'
  | 'home_page.activitiesSection.id'
  | 'home_page.activitiesSection.node_locale'
  | 'home_page.activitiesSection.activitySectionTitle'
  | 'home_page.activitiesSection.activity'
  | 'home_page.activitiesSection.activity.contentful_id'
  | 'home_page.activitiesSection.activity.id'
  | 'home_page.activitiesSection.activity.node_locale'
  | 'home_page.activitiesSection.activity.activityCategory'
  | 'home_page.activitiesSection.activity.activity_section'
  | 'home_page.activitiesSection.activity.spaceId'
  | 'home_page.activitiesSection.activity.createdAt'
  | 'home_page.activitiesSection.activity.updatedAt'
  | 'home_page.activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'home_page.activitiesSection.activity.children'
  | 'home_page.activitiesSection.home_page'
  | 'home_page.activitiesSection.home_page.contentful_id'
  | 'home_page.activitiesSection.home_page.id'
  | 'home_page.activitiesSection.home_page.node_locale'
  | 'home_page.activitiesSection.home_page.bannerSection'
  | 'home_page.activitiesSection.home_page.activitiesSection'
  | 'home_page.activitiesSection.home_page.spaceId'
  | 'home_page.activitiesSection.home_page.createdAt'
  | 'home_page.activitiesSection.home_page.updatedAt'
  | 'home_page.activitiesSection.home_page.children'
  | 'home_page.activitiesSection.spaceId'
  | 'home_page.activitiesSection.createdAt'
  | 'home_page.activitiesSection.updatedAt'
  | 'home_page.activitiesSection.sys.type'
  | 'home_page.activitiesSection.sys.revision'
  | 'home_page.activitiesSection.parent.id'
  | 'home_page.activitiesSection.parent.children'
  | 'home_page.activitiesSection.children'
  | 'home_page.activitiesSection.children.id'
  | 'home_page.activitiesSection.children.children'
  | 'home_page.activitiesSection.internal.content'
  | 'home_page.activitiesSection.internal.contentDigest'
  | 'home_page.activitiesSection.internal.description'
  | 'home_page.activitiesSection.internal.fieldOwners'
  | 'home_page.activitiesSection.internal.ignoreType'
  | 'home_page.activitiesSection.internal.mediaType'
  | 'home_page.activitiesSection.internal.owner'
  | 'home_page.activitiesSection.internal.type'
  | 'home_page.spaceId'
  | 'home_page.createdAt'
  | 'home_page.updatedAt'
  | 'home_page.sys.type'
  | 'home_page.sys.revision'
  | 'home_page.parent.id'
  | 'home_page.parent.parent.id'
  | 'home_page.parent.parent.children'
  | 'home_page.parent.children'
  | 'home_page.parent.children.id'
  | 'home_page.parent.children.children'
  | 'home_page.parent.internal.content'
  | 'home_page.parent.internal.contentDigest'
  | 'home_page.parent.internal.description'
  | 'home_page.parent.internal.fieldOwners'
  | 'home_page.parent.internal.ignoreType'
  | 'home_page.parent.internal.mediaType'
  | 'home_page.parent.internal.owner'
  | 'home_page.parent.internal.type'
  | 'home_page.children'
  | 'home_page.children.id'
  | 'home_page.children.parent.id'
  | 'home_page.children.parent.children'
  | 'home_page.children.children'
  | 'home_page.children.children.id'
  | 'home_page.children.children.children'
  | 'home_page.children.internal.content'
  | 'home_page.children.internal.contentDigest'
  | 'home_page.children.internal.description'
  | 'home_page.children.internal.fieldOwners'
  | 'home_page.children.internal.ignoreType'
  | 'home_page.children.internal.mediaType'
  | 'home_page.children.internal.owner'
  | 'home_page.children.internal.type'
  | 'home_page.internal.content'
  | 'home_page.internal.contentDigest'
  | 'home_page.internal.description'
  | 'home_page.internal.fieldOwners'
  | 'home_page.internal.ignoreType'
  | 'home_page.internal.mediaType'
  | 'home_page.internal.owner'
  | 'home_page.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
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

type ContentfulBannerGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBannerEdge>;
  readonly nodes: ReadonlyArray<ContentfulBanner>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulBannerGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulBannerGroupConnection_distinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerGroupConnection_maxArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerGroupConnection_minArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerGroupConnection_sumArgs = {
  field: ContentfulBannerFieldsEnum;
};


type ContentfulBannerGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBannerFieldsEnum;
};

type ContentfulBannerSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulBannerFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAboutUsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAboutUsEdge>;
  readonly nodes: ReadonlyArray<ContentfulAboutUs>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAboutUsGroupConnection>;
};


type ContentfulAboutUsConnection_distinctArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsConnection_maxArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsConnection_minArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsConnection_sumArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAboutUsFieldsEnum;
};

type ContentfulAboutUsEdge = {
  readonly next: Maybe<ContentfulAboutUs>;
  readonly node: ContentfulAboutUs;
  readonly previous: Maybe<ContentfulAboutUs>;
};

type ContentfulAboutUsFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'sectionTitle'
  | 'home_page'
  | 'home_page.contentful_id'
  | 'home_page.id'
  | 'home_page.node_locale'
  | 'home_page.bannerSection'
  | 'home_page.bannerSection.contentful_id'
  | 'home_page.bannerSection.id'
  | 'home_page.bannerSection.node_locale'
  | 'home_page.bannerSection.title'
  | 'home_page.bannerSection.image'
  | 'home_page.bannerSection.image.contentful_id'
  | 'home_page.bannerSection.image.id'
  | 'home_page.bannerSection.image.spaceId'
  | 'home_page.bannerSection.image.createdAt'
  | 'home_page.bannerSection.image.updatedAt'
  | 'home_page.bannerSection.image.title'
  | 'home_page.bannerSection.image.description'
  | 'home_page.bannerSection.image.node_locale'
  | 'home_page.bannerSection.image.gatsbyImageData'
  | 'home_page.bannerSection.image.children'
  | 'home_page.bannerSection.home_page'
  | 'home_page.bannerSection.home_page.contentful_id'
  | 'home_page.bannerSection.home_page.id'
  | 'home_page.bannerSection.home_page.node_locale'
  | 'home_page.bannerSection.home_page.bannerSection'
  | 'home_page.bannerSection.home_page.activitiesSection'
  | 'home_page.bannerSection.home_page.spaceId'
  | 'home_page.bannerSection.home_page.createdAt'
  | 'home_page.bannerSection.home_page.updatedAt'
  | 'home_page.bannerSection.home_page.children'
  | 'home_page.bannerSection.spaceId'
  | 'home_page.bannerSection.createdAt'
  | 'home_page.bannerSection.updatedAt'
  | 'home_page.bannerSection.sys.type'
  | 'home_page.bannerSection.sys.revision'
  | 'home_page.bannerSection.parent.id'
  | 'home_page.bannerSection.parent.children'
  | 'home_page.bannerSection.children'
  | 'home_page.bannerSection.children.id'
  | 'home_page.bannerSection.children.children'
  | 'home_page.bannerSection.internal.content'
  | 'home_page.bannerSection.internal.contentDigest'
  | 'home_page.bannerSection.internal.description'
  | 'home_page.bannerSection.internal.fieldOwners'
  | 'home_page.bannerSection.internal.ignoreType'
  | 'home_page.bannerSection.internal.mediaType'
  | 'home_page.bannerSection.internal.owner'
  | 'home_page.bannerSection.internal.type'
  | 'home_page.aboutUsSection.contentful_id'
  | 'home_page.aboutUsSection.id'
  | 'home_page.aboutUsSection.node_locale'
  | 'home_page.aboutUsSection.sectionTitle'
  | 'home_page.aboutUsSection.home_page'
  | 'home_page.aboutUsSection.home_page.contentful_id'
  | 'home_page.aboutUsSection.home_page.id'
  | 'home_page.aboutUsSection.home_page.node_locale'
  | 'home_page.aboutUsSection.home_page.bannerSection'
  | 'home_page.aboutUsSection.home_page.activitiesSection'
  | 'home_page.aboutUsSection.home_page.spaceId'
  | 'home_page.aboutUsSection.home_page.createdAt'
  | 'home_page.aboutUsSection.home_page.updatedAt'
  | 'home_page.aboutUsSection.home_page.children'
  | 'home_page.aboutUsSection.aboutUsDescription.id'
  | 'home_page.aboutUsSection.aboutUsDescription.children'
  | 'home_page.aboutUsSection.aboutUsDescription.aboutUsDescription'
  | 'home_page.aboutUsSection.spaceId'
  | 'home_page.aboutUsSection.createdAt'
  | 'home_page.aboutUsSection.updatedAt'
  | 'home_page.aboutUsSection.sys.type'
  | 'home_page.aboutUsSection.sys.revision'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'home_page.aboutUsSection.parent.id'
  | 'home_page.aboutUsSection.parent.children'
  | 'home_page.aboutUsSection.children'
  | 'home_page.aboutUsSection.children.id'
  | 'home_page.aboutUsSection.children.children'
  | 'home_page.aboutUsSection.internal.content'
  | 'home_page.aboutUsSection.internal.contentDigest'
  | 'home_page.aboutUsSection.internal.description'
  | 'home_page.aboutUsSection.internal.fieldOwners'
  | 'home_page.aboutUsSection.internal.ignoreType'
  | 'home_page.aboutUsSection.internal.mediaType'
  | 'home_page.aboutUsSection.internal.owner'
  | 'home_page.aboutUsSection.internal.type'
  | 'home_page.activitiesSection'
  | 'home_page.activitiesSection.contentful_id'
  | 'home_page.activitiesSection.id'
  | 'home_page.activitiesSection.node_locale'
  | 'home_page.activitiesSection.activitySectionTitle'
  | 'home_page.activitiesSection.activity'
  | 'home_page.activitiesSection.activity.contentful_id'
  | 'home_page.activitiesSection.activity.id'
  | 'home_page.activitiesSection.activity.node_locale'
  | 'home_page.activitiesSection.activity.activityCategory'
  | 'home_page.activitiesSection.activity.activity_section'
  | 'home_page.activitiesSection.activity.spaceId'
  | 'home_page.activitiesSection.activity.createdAt'
  | 'home_page.activitiesSection.activity.updatedAt'
  | 'home_page.activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'home_page.activitiesSection.activity.children'
  | 'home_page.activitiesSection.home_page'
  | 'home_page.activitiesSection.home_page.contentful_id'
  | 'home_page.activitiesSection.home_page.id'
  | 'home_page.activitiesSection.home_page.node_locale'
  | 'home_page.activitiesSection.home_page.bannerSection'
  | 'home_page.activitiesSection.home_page.activitiesSection'
  | 'home_page.activitiesSection.home_page.spaceId'
  | 'home_page.activitiesSection.home_page.createdAt'
  | 'home_page.activitiesSection.home_page.updatedAt'
  | 'home_page.activitiesSection.home_page.children'
  | 'home_page.activitiesSection.spaceId'
  | 'home_page.activitiesSection.createdAt'
  | 'home_page.activitiesSection.updatedAt'
  | 'home_page.activitiesSection.sys.type'
  | 'home_page.activitiesSection.sys.revision'
  | 'home_page.activitiesSection.parent.id'
  | 'home_page.activitiesSection.parent.children'
  | 'home_page.activitiesSection.children'
  | 'home_page.activitiesSection.children.id'
  | 'home_page.activitiesSection.children.children'
  | 'home_page.activitiesSection.internal.content'
  | 'home_page.activitiesSection.internal.contentDigest'
  | 'home_page.activitiesSection.internal.description'
  | 'home_page.activitiesSection.internal.fieldOwners'
  | 'home_page.activitiesSection.internal.ignoreType'
  | 'home_page.activitiesSection.internal.mediaType'
  | 'home_page.activitiesSection.internal.owner'
  | 'home_page.activitiesSection.internal.type'
  | 'home_page.spaceId'
  | 'home_page.createdAt'
  | 'home_page.updatedAt'
  | 'home_page.sys.type'
  | 'home_page.sys.revision'
  | 'home_page.parent.id'
  | 'home_page.parent.parent.id'
  | 'home_page.parent.parent.children'
  | 'home_page.parent.children'
  | 'home_page.parent.children.id'
  | 'home_page.parent.children.children'
  | 'home_page.parent.internal.content'
  | 'home_page.parent.internal.contentDigest'
  | 'home_page.parent.internal.description'
  | 'home_page.parent.internal.fieldOwners'
  | 'home_page.parent.internal.ignoreType'
  | 'home_page.parent.internal.mediaType'
  | 'home_page.parent.internal.owner'
  | 'home_page.parent.internal.type'
  | 'home_page.children'
  | 'home_page.children.id'
  | 'home_page.children.parent.id'
  | 'home_page.children.parent.children'
  | 'home_page.children.children'
  | 'home_page.children.children.id'
  | 'home_page.children.children.children'
  | 'home_page.children.internal.content'
  | 'home_page.children.internal.contentDigest'
  | 'home_page.children.internal.description'
  | 'home_page.children.internal.fieldOwners'
  | 'home_page.children.internal.ignoreType'
  | 'home_page.children.internal.mediaType'
  | 'home_page.children.internal.owner'
  | 'home_page.children.internal.type'
  | 'home_page.internal.content'
  | 'home_page.internal.contentDigest'
  | 'home_page.internal.description'
  | 'home_page.internal.fieldOwners'
  | 'home_page.internal.ignoreType'
  | 'home_page.internal.mediaType'
  | 'home_page.internal.owner'
  | 'home_page.internal.type'
  | 'aboutUsDescription.id'
  | 'aboutUsDescription.parent.id'
  | 'aboutUsDescription.parent.parent.id'
  | 'aboutUsDescription.parent.parent.children'
  | 'aboutUsDescription.parent.children'
  | 'aboutUsDescription.parent.children.id'
  | 'aboutUsDescription.parent.children.children'
  | 'aboutUsDescription.parent.internal.content'
  | 'aboutUsDescription.parent.internal.contentDigest'
  | 'aboutUsDescription.parent.internal.description'
  | 'aboutUsDescription.parent.internal.fieldOwners'
  | 'aboutUsDescription.parent.internal.ignoreType'
  | 'aboutUsDescription.parent.internal.mediaType'
  | 'aboutUsDescription.parent.internal.owner'
  | 'aboutUsDescription.parent.internal.type'
  | 'aboutUsDescription.children'
  | 'aboutUsDescription.children.id'
  | 'aboutUsDescription.children.parent.id'
  | 'aboutUsDescription.children.parent.children'
  | 'aboutUsDescription.children.children'
  | 'aboutUsDescription.children.children.id'
  | 'aboutUsDescription.children.children.children'
  | 'aboutUsDescription.children.internal.content'
  | 'aboutUsDescription.children.internal.contentDigest'
  | 'aboutUsDescription.children.internal.description'
  | 'aboutUsDescription.children.internal.fieldOwners'
  | 'aboutUsDescription.children.internal.ignoreType'
  | 'aboutUsDescription.children.internal.mediaType'
  | 'aboutUsDescription.children.internal.owner'
  | 'aboutUsDescription.children.internal.type'
  | 'aboutUsDescription.internal.content'
  | 'aboutUsDescription.internal.contentDigest'
  | 'aboutUsDescription.internal.description'
  | 'aboutUsDescription.internal.fieldOwners'
  | 'aboutUsDescription.internal.ignoreType'
  | 'aboutUsDescription.internal.mediaType'
  | 'aboutUsDescription.internal.owner'
  | 'aboutUsDescription.internal.type'
  | 'aboutUsDescription.aboutUsDescription'
  | 'aboutUsDescription.sys.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.children.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.children.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.parent.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.parent.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.children.id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.children.children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.content'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.description'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.children.internal.type'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.content'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.description'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.owner'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.type'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode.sys.type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.parent.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.parent.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.children.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.children.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.content'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.description'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.owner'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.parent.internal.type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.parent.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.parent.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.children.id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.children.children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.content'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.description'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.owner'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.children.internal.type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.content'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.contentDigest'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.description'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.ignoreType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.mediaType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.owner'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.internal.type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode.sys.type'
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

type ContentfulAboutUsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAboutUsEdge>;
  readonly nodes: ReadonlyArray<ContentfulAboutUs>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAboutUsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAboutUsGroupConnection_distinctArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsGroupConnection_maxArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsGroupConnection_minArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsGroupConnection_sumArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


type ContentfulAboutUsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAboutUsFieldsEnum;
};

type ContentfulAboutUsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAboutUsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulActivityConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulActivityEdge>;
  readonly nodes: ReadonlyArray<ContentfulActivity>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulActivityGroupConnection>;
};


type ContentfulActivityConnection_distinctArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityConnection_maxArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityConnection_minArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityConnection_sumArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulActivityFieldsEnum;
};

type ContentfulActivityEdge = {
  readonly next: Maybe<ContentfulActivity>;
  readonly node: ContentfulActivity;
  readonly previous: Maybe<ContentfulActivity>;
};

type ContentfulActivityFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'activityCategory'
  | 'activityImage.contentful_id'
  | 'activityImage.id'
  | 'activityImage.spaceId'
  | 'activityImage.createdAt'
  | 'activityImage.updatedAt'
  | 'activityImage.file.url'
  | 'activityImage.file.details.size'
  | 'activityImage.file.fileName'
  | 'activityImage.file.contentType'
  | 'activityImage.title'
  | 'activityImage.description'
  | 'activityImage.node_locale'
  | 'activityImage.sys.type'
  | 'activityImage.sys.revision'
  | 'activityImage.fixed.base64'
  | 'activityImage.fixed.tracedSVG'
  | 'activityImage.fixed.aspectRatio'
  | 'activityImage.fixed.width'
  | 'activityImage.fixed.height'
  | 'activityImage.fixed.src'
  | 'activityImage.fixed.srcSet'
  | 'activityImage.fixed.srcWebp'
  | 'activityImage.fixed.srcSetWebp'
  | 'activityImage.fluid.base64'
  | 'activityImage.fluid.tracedSVG'
  | 'activityImage.fluid.aspectRatio'
  | 'activityImage.fluid.src'
  | 'activityImage.fluid.srcSet'
  | 'activityImage.fluid.srcWebp'
  | 'activityImage.fluid.srcSetWebp'
  | 'activityImage.fluid.sizes'
  | 'activityImage.gatsbyImageData'
  | 'activityImage.resize.base64'
  | 'activityImage.resize.tracedSVG'
  | 'activityImage.resize.src'
  | 'activityImage.resize.width'
  | 'activityImage.resize.height'
  | 'activityImage.resize.aspectRatio'
  | 'activityImage.parent.id'
  | 'activityImage.parent.parent.id'
  | 'activityImage.parent.parent.children'
  | 'activityImage.parent.children'
  | 'activityImage.parent.children.id'
  | 'activityImage.parent.children.children'
  | 'activityImage.parent.internal.content'
  | 'activityImage.parent.internal.contentDigest'
  | 'activityImage.parent.internal.description'
  | 'activityImage.parent.internal.fieldOwners'
  | 'activityImage.parent.internal.ignoreType'
  | 'activityImage.parent.internal.mediaType'
  | 'activityImage.parent.internal.owner'
  | 'activityImage.parent.internal.type'
  | 'activityImage.children'
  | 'activityImage.children.id'
  | 'activityImage.children.parent.id'
  | 'activityImage.children.parent.children'
  | 'activityImage.children.children'
  | 'activityImage.children.children.id'
  | 'activityImage.children.children.children'
  | 'activityImage.children.internal.content'
  | 'activityImage.children.internal.contentDigest'
  | 'activityImage.children.internal.description'
  | 'activityImage.children.internal.fieldOwners'
  | 'activityImage.children.internal.ignoreType'
  | 'activityImage.children.internal.mediaType'
  | 'activityImage.children.internal.owner'
  | 'activityImage.children.internal.type'
  | 'activityImage.internal.content'
  | 'activityImage.internal.contentDigest'
  | 'activityImage.internal.description'
  | 'activityImage.internal.fieldOwners'
  | 'activityImage.internal.ignoreType'
  | 'activityImage.internal.mediaType'
  | 'activityImage.internal.owner'
  | 'activityImage.internal.type'
  | 'activity_section'
  | 'activity_section.contentful_id'
  | 'activity_section.id'
  | 'activity_section.node_locale'
  | 'activity_section.activitySectionTitle'
  | 'activity_section.activity'
  | 'activity_section.activity.contentful_id'
  | 'activity_section.activity.id'
  | 'activity_section.activity.node_locale'
  | 'activity_section.activity.activityCategory'
  | 'activity_section.activity.activityImage.contentful_id'
  | 'activity_section.activity.activityImage.id'
  | 'activity_section.activity.activityImage.spaceId'
  | 'activity_section.activity.activityImage.createdAt'
  | 'activity_section.activity.activityImage.updatedAt'
  | 'activity_section.activity.activityImage.title'
  | 'activity_section.activity.activityImage.description'
  | 'activity_section.activity.activityImage.node_locale'
  | 'activity_section.activity.activityImage.gatsbyImageData'
  | 'activity_section.activity.activityImage.children'
  | 'activity_section.activity.activity_section'
  | 'activity_section.activity.activity_section.contentful_id'
  | 'activity_section.activity.activity_section.id'
  | 'activity_section.activity.activity_section.node_locale'
  | 'activity_section.activity.activity_section.activitySectionTitle'
  | 'activity_section.activity.activity_section.activity'
  | 'activity_section.activity.activity_section.home_page'
  | 'activity_section.activity.activity_section.spaceId'
  | 'activity_section.activity.activity_section.createdAt'
  | 'activity_section.activity.activity_section.updatedAt'
  | 'activity_section.activity.activity_section.children'
  | 'activity_section.activity.activityDescription.id'
  | 'activity_section.activity.activityDescription.children'
  | 'activity_section.activity.activityDescription.activityDescription'
  | 'activity_section.activity.spaceId'
  | 'activity_section.activity.createdAt'
  | 'activity_section.activity.updatedAt'
  | 'activity_section.activity.sys.type'
  | 'activity_section.activity.sys.revision'
  | 'activity_section.activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'activity_section.activity.childrenContentfulActivityActivityDescriptionTextNode.id'
  | 'activity_section.activity.childrenContentfulActivityActivityDescriptionTextNode.children'
  | 'activity_section.activity.childrenContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'activity_section.activity.childContentfulActivityActivityDescriptionTextNode.id'
  | 'activity_section.activity.childContentfulActivityActivityDescriptionTextNode.children'
  | 'activity_section.activity.childContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'activity_section.activity.parent.id'
  | 'activity_section.activity.parent.children'
  | 'activity_section.activity.children'
  | 'activity_section.activity.children.id'
  | 'activity_section.activity.children.children'
  | 'activity_section.activity.internal.content'
  | 'activity_section.activity.internal.contentDigest'
  | 'activity_section.activity.internal.description'
  | 'activity_section.activity.internal.fieldOwners'
  | 'activity_section.activity.internal.ignoreType'
  | 'activity_section.activity.internal.mediaType'
  | 'activity_section.activity.internal.owner'
  | 'activity_section.activity.internal.type'
  | 'activity_section.home_page'
  | 'activity_section.home_page.contentful_id'
  | 'activity_section.home_page.id'
  | 'activity_section.home_page.node_locale'
  | 'activity_section.home_page.bannerSection'
  | 'activity_section.home_page.bannerSection.contentful_id'
  | 'activity_section.home_page.bannerSection.id'
  | 'activity_section.home_page.bannerSection.node_locale'
  | 'activity_section.home_page.bannerSection.title'
  | 'activity_section.home_page.bannerSection.image'
  | 'activity_section.home_page.bannerSection.home_page'
  | 'activity_section.home_page.bannerSection.spaceId'
  | 'activity_section.home_page.bannerSection.createdAt'
  | 'activity_section.home_page.bannerSection.updatedAt'
  | 'activity_section.home_page.bannerSection.children'
  | 'activity_section.home_page.aboutUsSection.contentful_id'
  | 'activity_section.home_page.aboutUsSection.id'
  | 'activity_section.home_page.aboutUsSection.node_locale'
  | 'activity_section.home_page.aboutUsSection.sectionTitle'
  | 'activity_section.home_page.aboutUsSection.home_page'
  | 'activity_section.home_page.aboutUsSection.spaceId'
  | 'activity_section.home_page.aboutUsSection.createdAt'
  | 'activity_section.home_page.aboutUsSection.updatedAt'
  | 'activity_section.home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'activity_section.home_page.aboutUsSection.children'
  | 'activity_section.home_page.activitiesSection'
  | 'activity_section.home_page.activitiesSection.contentful_id'
  | 'activity_section.home_page.activitiesSection.id'
  | 'activity_section.home_page.activitiesSection.node_locale'
  | 'activity_section.home_page.activitiesSection.activitySectionTitle'
  | 'activity_section.home_page.activitiesSection.activity'
  | 'activity_section.home_page.activitiesSection.home_page'
  | 'activity_section.home_page.activitiesSection.spaceId'
  | 'activity_section.home_page.activitiesSection.createdAt'
  | 'activity_section.home_page.activitiesSection.updatedAt'
  | 'activity_section.home_page.activitiesSection.children'
  | 'activity_section.home_page.spaceId'
  | 'activity_section.home_page.createdAt'
  | 'activity_section.home_page.updatedAt'
  | 'activity_section.home_page.sys.type'
  | 'activity_section.home_page.sys.revision'
  | 'activity_section.home_page.parent.id'
  | 'activity_section.home_page.parent.children'
  | 'activity_section.home_page.children'
  | 'activity_section.home_page.children.id'
  | 'activity_section.home_page.children.children'
  | 'activity_section.home_page.internal.content'
  | 'activity_section.home_page.internal.contentDigest'
  | 'activity_section.home_page.internal.description'
  | 'activity_section.home_page.internal.fieldOwners'
  | 'activity_section.home_page.internal.ignoreType'
  | 'activity_section.home_page.internal.mediaType'
  | 'activity_section.home_page.internal.owner'
  | 'activity_section.home_page.internal.type'
  | 'activity_section.spaceId'
  | 'activity_section.createdAt'
  | 'activity_section.updatedAt'
  | 'activity_section.sys.type'
  | 'activity_section.sys.revision'
  | 'activity_section.parent.id'
  | 'activity_section.parent.parent.id'
  | 'activity_section.parent.parent.children'
  | 'activity_section.parent.children'
  | 'activity_section.parent.children.id'
  | 'activity_section.parent.children.children'
  | 'activity_section.parent.internal.content'
  | 'activity_section.parent.internal.contentDigest'
  | 'activity_section.parent.internal.description'
  | 'activity_section.parent.internal.fieldOwners'
  | 'activity_section.parent.internal.ignoreType'
  | 'activity_section.parent.internal.mediaType'
  | 'activity_section.parent.internal.owner'
  | 'activity_section.parent.internal.type'
  | 'activity_section.children'
  | 'activity_section.children.id'
  | 'activity_section.children.parent.id'
  | 'activity_section.children.parent.children'
  | 'activity_section.children.children'
  | 'activity_section.children.children.id'
  | 'activity_section.children.children.children'
  | 'activity_section.children.internal.content'
  | 'activity_section.children.internal.contentDigest'
  | 'activity_section.children.internal.description'
  | 'activity_section.children.internal.fieldOwners'
  | 'activity_section.children.internal.ignoreType'
  | 'activity_section.children.internal.mediaType'
  | 'activity_section.children.internal.owner'
  | 'activity_section.children.internal.type'
  | 'activity_section.internal.content'
  | 'activity_section.internal.contentDigest'
  | 'activity_section.internal.description'
  | 'activity_section.internal.fieldOwners'
  | 'activity_section.internal.ignoreType'
  | 'activity_section.internal.mediaType'
  | 'activity_section.internal.owner'
  | 'activity_section.internal.type'
  | 'activityDescription.id'
  | 'activityDescription.parent.id'
  | 'activityDescription.parent.parent.id'
  | 'activityDescription.parent.parent.children'
  | 'activityDescription.parent.children'
  | 'activityDescription.parent.children.id'
  | 'activityDescription.parent.children.children'
  | 'activityDescription.parent.internal.content'
  | 'activityDescription.parent.internal.contentDigest'
  | 'activityDescription.parent.internal.description'
  | 'activityDescription.parent.internal.fieldOwners'
  | 'activityDescription.parent.internal.ignoreType'
  | 'activityDescription.parent.internal.mediaType'
  | 'activityDescription.parent.internal.owner'
  | 'activityDescription.parent.internal.type'
  | 'activityDescription.children'
  | 'activityDescription.children.id'
  | 'activityDescription.children.parent.id'
  | 'activityDescription.children.parent.children'
  | 'activityDescription.children.children'
  | 'activityDescription.children.children.id'
  | 'activityDescription.children.children.children'
  | 'activityDescription.children.internal.content'
  | 'activityDescription.children.internal.contentDigest'
  | 'activityDescription.children.internal.description'
  | 'activityDescription.children.internal.fieldOwners'
  | 'activityDescription.children.internal.ignoreType'
  | 'activityDescription.children.internal.mediaType'
  | 'activityDescription.children.internal.owner'
  | 'activityDescription.children.internal.type'
  | 'activityDescription.internal.content'
  | 'activityDescription.internal.contentDigest'
  | 'activityDescription.internal.description'
  | 'activityDescription.internal.fieldOwners'
  | 'activityDescription.internal.ignoreType'
  | 'activityDescription.internal.mediaType'
  | 'activityDescription.internal.owner'
  | 'activityDescription.internal.type'
  | 'activityDescription.activityDescription'
  | 'activityDescription.sys.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode'
  | 'childrenContentfulActivityActivityDescriptionTextNode.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.children.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.children.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulActivityActivityDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.parent.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.parent.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.children.id'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.children.children'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.content'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.description'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulActivityActivityDescriptionTextNode.children.internal.type'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.content'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.description'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.owner'
  | 'childrenContentfulActivityActivityDescriptionTextNode.internal.type'
  | 'childrenContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'childrenContentfulActivityActivityDescriptionTextNode.sys.type'
  | 'childContentfulActivityActivityDescriptionTextNode.id'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.id'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.parent.id'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.parent.children'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.children'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.children.id'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.children.children'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.content'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.description'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.owner'
  | 'childContentfulActivityActivityDescriptionTextNode.parent.internal.type'
  | 'childContentfulActivityActivityDescriptionTextNode.children'
  | 'childContentfulActivityActivityDescriptionTextNode.children.id'
  | 'childContentfulActivityActivityDescriptionTextNode.children.parent.id'
  | 'childContentfulActivityActivityDescriptionTextNode.children.parent.children'
  | 'childContentfulActivityActivityDescriptionTextNode.children.children'
  | 'childContentfulActivityActivityDescriptionTextNode.children.children.id'
  | 'childContentfulActivityActivityDescriptionTextNode.children.children.children'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.content'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.description'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.owner'
  | 'childContentfulActivityActivityDescriptionTextNode.children.internal.type'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.content'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.contentDigest'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.description'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.ignoreType'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.mediaType'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.owner'
  | 'childContentfulActivityActivityDescriptionTextNode.internal.type'
  | 'childContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'childContentfulActivityActivityDescriptionTextNode.sys.type'
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

type ContentfulActivityGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulActivityEdge>;
  readonly nodes: ReadonlyArray<ContentfulActivity>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulActivityGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulActivityGroupConnection_distinctArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityGroupConnection_maxArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityGroupConnection_minArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityGroupConnection_sumArgs = {
  field: ContentfulActivityFieldsEnum;
};


type ContentfulActivityGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulActivityFieldsEnum;
};

type ContentfulActivitySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulActivityFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulHomePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulHomePageEdge>;
  readonly nodes: ReadonlyArray<ContentfulHomePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulHomePageGroupConnection>;
};


type ContentfulHomePageConnection_distinctArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageConnection_maxArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageConnection_minArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageConnection_sumArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulHomePageFieldsEnum;
};

type ContentfulHomePageEdge = {
  readonly next: Maybe<ContentfulHomePage>;
  readonly node: ContentfulHomePage;
  readonly previous: Maybe<ContentfulHomePage>;
};

type ContentfulHomePageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'bannerSection'
  | 'bannerSection.contentful_id'
  | 'bannerSection.id'
  | 'bannerSection.node_locale'
  | 'bannerSection.title'
  | 'bannerSection.image'
  | 'bannerSection.image.contentful_id'
  | 'bannerSection.image.id'
  | 'bannerSection.image.spaceId'
  | 'bannerSection.image.createdAt'
  | 'bannerSection.image.updatedAt'
  | 'bannerSection.image.file.url'
  | 'bannerSection.image.file.fileName'
  | 'bannerSection.image.file.contentType'
  | 'bannerSection.image.title'
  | 'bannerSection.image.description'
  | 'bannerSection.image.node_locale'
  | 'bannerSection.image.sys.type'
  | 'bannerSection.image.sys.revision'
  | 'bannerSection.image.fixed.base64'
  | 'bannerSection.image.fixed.tracedSVG'
  | 'bannerSection.image.fixed.aspectRatio'
  | 'bannerSection.image.fixed.width'
  | 'bannerSection.image.fixed.height'
  | 'bannerSection.image.fixed.src'
  | 'bannerSection.image.fixed.srcSet'
  | 'bannerSection.image.fixed.srcWebp'
  | 'bannerSection.image.fixed.srcSetWebp'
  | 'bannerSection.image.fluid.base64'
  | 'bannerSection.image.fluid.tracedSVG'
  | 'bannerSection.image.fluid.aspectRatio'
  | 'bannerSection.image.fluid.src'
  | 'bannerSection.image.fluid.srcSet'
  | 'bannerSection.image.fluid.srcWebp'
  | 'bannerSection.image.fluid.srcSetWebp'
  | 'bannerSection.image.fluid.sizes'
  | 'bannerSection.image.gatsbyImageData'
  | 'bannerSection.image.resize.base64'
  | 'bannerSection.image.resize.tracedSVG'
  | 'bannerSection.image.resize.src'
  | 'bannerSection.image.resize.width'
  | 'bannerSection.image.resize.height'
  | 'bannerSection.image.resize.aspectRatio'
  | 'bannerSection.image.parent.id'
  | 'bannerSection.image.parent.children'
  | 'bannerSection.image.children'
  | 'bannerSection.image.children.id'
  | 'bannerSection.image.children.children'
  | 'bannerSection.image.internal.content'
  | 'bannerSection.image.internal.contentDigest'
  | 'bannerSection.image.internal.description'
  | 'bannerSection.image.internal.fieldOwners'
  | 'bannerSection.image.internal.ignoreType'
  | 'bannerSection.image.internal.mediaType'
  | 'bannerSection.image.internal.owner'
  | 'bannerSection.image.internal.type'
  | 'bannerSection.home_page'
  | 'bannerSection.home_page.contentful_id'
  | 'bannerSection.home_page.id'
  | 'bannerSection.home_page.node_locale'
  | 'bannerSection.home_page.bannerSection'
  | 'bannerSection.home_page.bannerSection.contentful_id'
  | 'bannerSection.home_page.bannerSection.id'
  | 'bannerSection.home_page.bannerSection.node_locale'
  | 'bannerSection.home_page.bannerSection.title'
  | 'bannerSection.home_page.bannerSection.image'
  | 'bannerSection.home_page.bannerSection.home_page'
  | 'bannerSection.home_page.bannerSection.spaceId'
  | 'bannerSection.home_page.bannerSection.createdAt'
  | 'bannerSection.home_page.bannerSection.updatedAt'
  | 'bannerSection.home_page.bannerSection.children'
  | 'bannerSection.home_page.aboutUsSection.contentful_id'
  | 'bannerSection.home_page.aboutUsSection.id'
  | 'bannerSection.home_page.aboutUsSection.node_locale'
  | 'bannerSection.home_page.aboutUsSection.sectionTitle'
  | 'bannerSection.home_page.aboutUsSection.home_page'
  | 'bannerSection.home_page.aboutUsSection.spaceId'
  | 'bannerSection.home_page.aboutUsSection.createdAt'
  | 'bannerSection.home_page.aboutUsSection.updatedAt'
  | 'bannerSection.home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'bannerSection.home_page.aboutUsSection.children'
  | 'bannerSection.home_page.activitiesSection'
  | 'bannerSection.home_page.activitiesSection.contentful_id'
  | 'bannerSection.home_page.activitiesSection.id'
  | 'bannerSection.home_page.activitiesSection.node_locale'
  | 'bannerSection.home_page.activitiesSection.activitySectionTitle'
  | 'bannerSection.home_page.activitiesSection.activity'
  | 'bannerSection.home_page.activitiesSection.home_page'
  | 'bannerSection.home_page.activitiesSection.spaceId'
  | 'bannerSection.home_page.activitiesSection.createdAt'
  | 'bannerSection.home_page.activitiesSection.updatedAt'
  | 'bannerSection.home_page.activitiesSection.children'
  | 'bannerSection.home_page.spaceId'
  | 'bannerSection.home_page.createdAt'
  | 'bannerSection.home_page.updatedAt'
  | 'bannerSection.home_page.sys.type'
  | 'bannerSection.home_page.sys.revision'
  | 'bannerSection.home_page.parent.id'
  | 'bannerSection.home_page.parent.children'
  | 'bannerSection.home_page.children'
  | 'bannerSection.home_page.children.id'
  | 'bannerSection.home_page.children.children'
  | 'bannerSection.home_page.internal.content'
  | 'bannerSection.home_page.internal.contentDigest'
  | 'bannerSection.home_page.internal.description'
  | 'bannerSection.home_page.internal.fieldOwners'
  | 'bannerSection.home_page.internal.ignoreType'
  | 'bannerSection.home_page.internal.mediaType'
  | 'bannerSection.home_page.internal.owner'
  | 'bannerSection.home_page.internal.type'
  | 'bannerSection.spaceId'
  | 'bannerSection.createdAt'
  | 'bannerSection.updatedAt'
  | 'bannerSection.sys.type'
  | 'bannerSection.sys.revision'
  | 'bannerSection.parent.id'
  | 'bannerSection.parent.parent.id'
  | 'bannerSection.parent.parent.children'
  | 'bannerSection.parent.children'
  | 'bannerSection.parent.children.id'
  | 'bannerSection.parent.children.children'
  | 'bannerSection.parent.internal.content'
  | 'bannerSection.parent.internal.contentDigest'
  | 'bannerSection.parent.internal.description'
  | 'bannerSection.parent.internal.fieldOwners'
  | 'bannerSection.parent.internal.ignoreType'
  | 'bannerSection.parent.internal.mediaType'
  | 'bannerSection.parent.internal.owner'
  | 'bannerSection.parent.internal.type'
  | 'bannerSection.children'
  | 'bannerSection.children.id'
  | 'bannerSection.children.parent.id'
  | 'bannerSection.children.parent.children'
  | 'bannerSection.children.children'
  | 'bannerSection.children.children.id'
  | 'bannerSection.children.children.children'
  | 'bannerSection.children.internal.content'
  | 'bannerSection.children.internal.contentDigest'
  | 'bannerSection.children.internal.description'
  | 'bannerSection.children.internal.fieldOwners'
  | 'bannerSection.children.internal.ignoreType'
  | 'bannerSection.children.internal.mediaType'
  | 'bannerSection.children.internal.owner'
  | 'bannerSection.children.internal.type'
  | 'bannerSection.internal.content'
  | 'bannerSection.internal.contentDigest'
  | 'bannerSection.internal.description'
  | 'bannerSection.internal.fieldOwners'
  | 'bannerSection.internal.ignoreType'
  | 'bannerSection.internal.mediaType'
  | 'bannerSection.internal.owner'
  | 'bannerSection.internal.type'
  | 'aboutUsSection.contentful_id'
  | 'aboutUsSection.id'
  | 'aboutUsSection.node_locale'
  | 'aboutUsSection.sectionTitle'
  | 'aboutUsSection.home_page'
  | 'aboutUsSection.home_page.contentful_id'
  | 'aboutUsSection.home_page.id'
  | 'aboutUsSection.home_page.node_locale'
  | 'aboutUsSection.home_page.bannerSection'
  | 'aboutUsSection.home_page.bannerSection.contentful_id'
  | 'aboutUsSection.home_page.bannerSection.id'
  | 'aboutUsSection.home_page.bannerSection.node_locale'
  | 'aboutUsSection.home_page.bannerSection.title'
  | 'aboutUsSection.home_page.bannerSection.image'
  | 'aboutUsSection.home_page.bannerSection.home_page'
  | 'aboutUsSection.home_page.bannerSection.spaceId'
  | 'aboutUsSection.home_page.bannerSection.createdAt'
  | 'aboutUsSection.home_page.bannerSection.updatedAt'
  | 'aboutUsSection.home_page.bannerSection.children'
  | 'aboutUsSection.home_page.aboutUsSection.contentful_id'
  | 'aboutUsSection.home_page.aboutUsSection.id'
  | 'aboutUsSection.home_page.aboutUsSection.node_locale'
  | 'aboutUsSection.home_page.aboutUsSection.sectionTitle'
  | 'aboutUsSection.home_page.aboutUsSection.home_page'
  | 'aboutUsSection.home_page.aboutUsSection.spaceId'
  | 'aboutUsSection.home_page.aboutUsSection.createdAt'
  | 'aboutUsSection.home_page.aboutUsSection.updatedAt'
  | 'aboutUsSection.home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'aboutUsSection.home_page.aboutUsSection.children'
  | 'aboutUsSection.home_page.activitiesSection'
  | 'aboutUsSection.home_page.activitiesSection.contentful_id'
  | 'aboutUsSection.home_page.activitiesSection.id'
  | 'aboutUsSection.home_page.activitiesSection.node_locale'
  | 'aboutUsSection.home_page.activitiesSection.activitySectionTitle'
  | 'aboutUsSection.home_page.activitiesSection.activity'
  | 'aboutUsSection.home_page.activitiesSection.home_page'
  | 'aboutUsSection.home_page.activitiesSection.spaceId'
  | 'aboutUsSection.home_page.activitiesSection.createdAt'
  | 'aboutUsSection.home_page.activitiesSection.updatedAt'
  | 'aboutUsSection.home_page.activitiesSection.children'
  | 'aboutUsSection.home_page.spaceId'
  | 'aboutUsSection.home_page.createdAt'
  | 'aboutUsSection.home_page.updatedAt'
  | 'aboutUsSection.home_page.sys.type'
  | 'aboutUsSection.home_page.sys.revision'
  | 'aboutUsSection.home_page.parent.id'
  | 'aboutUsSection.home_page.parent.children'
  | 'aboutUsSection.home_page.children'
  | 'aboutUsSection.home_page.children.id'
  | 'aboutUsSection.home_page.children.children'
  | 'aboutUsSection.home_page.internal.content'
  | 'aboutUsSection.home_page.internal.contentDigest'
  | 'aboutUsSection.home_page.internal.description'
  | 'aboutUsSection.home_page.internal.fieldOwners'
  | 'aboutUsSection.home_page.internal.ignoreType'
  | 'aboutUsSection.home_page.internal.mediaType'
  | 'aboutUsSection.home_page.internal.owner'
  | 'aboutUsSection.home_page.internal.type'
  | 'aboutUsSection.aboutUsDescription.id'
  | 'aboutUsSection.aboutUsDescription.parent.id'
  | 'aboutUsSection.aboutUsDescription.parent.children'
  | 'aboutUsSection.aboutUsDescription.children'
  | 'aboutUsSection.aboutUsDescription.children.id'
  | 'aboutUsSection.aboutUsDescription.children.children'
  | 'aboutUsSection.aboutUsDescription.internal.content'
  | 'aboutUsSection.aboutUsDescription.internal.contentDigest'
  | 'aboutUsSection.aboutUsDescription.internal.description'
  | 'aboutUsSection.aboutUsDescription.internal.fieldOwners'
  | 'aboutUsSection.aboutUsDescription.internal.ignoreType'
  | 'aboutUsSection.aboutUsDescription.internal.mediaType'
  | 'aboutUsSection.aboutUsDescription.internal.owner'
  | 'aboutUsSection.aboutUsDescription.internal.type'
  | 'aboutUsSection.aboutUsDescription.aboutUsDescription'
  | 'aboutUsSection.aboutUsDescription.sys.type'
  | 'aboutUsSection.spaceId'
  | 'aboutUsSection.createdAt'
  | 'aboutUsSection.updatedAt'
  | 'aboutUsSection.sys.type'
  | 'aboutUsSection.sys.revision'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.id'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.parent.children'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.children.id'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.children.children'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.content'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.contentDigest'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.description'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.fieldOwners'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.ignoreType'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.mediaType'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.owner'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.internal.type'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.sys.type'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.parent.id'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.parent.children'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.children.id'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.children.children'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.content'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.contentDigest'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.description'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.fieldOwners'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.ignoreType'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.mediaType'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.owner'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.internal.type'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.sys.type'
  | 'aboutUsSection.parent.id'
  | 'aboutUsSection.parent.parent.id'
  | 'aboutUsSection.parent.parent.children'
  | 'aboutUsSection.parent.children'
  | 'aboutUsSection.parent.children.id'
  | 'aboutUsSection.parent.children.children'
  | 'aboutUsSection.parent.internal.content'
  | 'aboutUsSection.parent.internal.contentDigest'
  | 'aboutUsSection.parent.internal.description'
  | 'aboutUsSection.parent.internal.fieldOwners'
  | 'aboutUsSection.parent.internal.ignoreType'
  | 'aboutUsSection.parent.internal.mediaType'
  | 'aboutUsSection.parent.internal.owner'
  | 'aboutUsSection.parent.internal.type'
  | 'aboutUsSection.children'
  | 'aboutUsSection.children.id'
  | 'aboutUsSection.children.parent.id'
  | 'aboutUsSection.children.parent.children'
  | 'aboutUsSection.children.children'
  | 'aboutUsSection.children.children.id'
  | 'aboutUsSection.children.children.children'
  | 'aboutUsSection.children.internal.content'
  | 'aboutUsSection.children.internal.contentDigest'
  | 'aboutUsSection.children.internal.description'
  | 'aboutUsSection.children.internal.fieldOwners'
  | 'aboutUsSection.children.internal.ignoreType'
  | 'aboutUsSection.children.internal.mediaType'
  | 'aboutUsSection.children.internal.owner'
  | 'aboutUsSection.children.internal.type'
  | 'aboutUsSection.internal.content'
  | 'aboutUsSection.internal.contentDigest'
  | 'aboutUsSection.internal.description'
  | 'aboutUsSection.internal.fieldOwners'
  | 'aboutUsSection.internal.ignoreType'
  | 'aboutUsSection.internal.mediaType'
  | 'aboutUsSection.internal.owner'
  | 'aboutUsSection.internal.type'
  | 'activitiesSection'
  | 'activitiesSection.contentful_id'
  | 'activitiesSection.id'
  | 'activitiesSection.node_locale'
  | 'activitiesSection.activitySectionTitle'
  | 'activitiesSection.activity'
  | 'activitiesSection.activity.contentful_id'
  | 'activitiesSection.activity.id'
  | 'activitiesSection.activity.node_locale'
  | 'activitiesSection.activity.activityCategory'
  | 'activitiesSection.activity.activityImage.contentful_id'
  | 'activitiesSection.activity.activityImage.id'
  | 'activitiesSection.activity.activityImage.spaceId'
  | 'activitiesSection.activity.activityImage.createdAt'
  | 'activitiesSection.activity.activityImage.updatedAt'
  | 'activitiesSection.activity.activityImage.title'
  | 'activitiesSection.activity.activityImage.description'
  | 'activitiesSection.activity.activityImage.node_locale'
  | 'activitiesSection.activity.activityImage.gatsbyImageData'
  | 'activitiesSection.activity.activityImage.children'
  | 'activitiesSection.activity.activity_section'
  | 'activitiesSection.activity.activity_section.contentful_id'
  | 'activitiesSection.activity.activity_section.id'
  | 'activitiesSection.activity.activity_section.node_locale'
  | 'activitiesSection.activity.activity_section.activitySectionTitle'
  | 'activitiesSection.activity.activity_section.activity'
  | 'activitiesSection.activity.activity_section.home_page'
  | 'activitiesSection.activity.activity_section.spaceId'
  | 'activitiesSection.activity.activity_section.createdAt'
  | 'activitiesSection.activity.activity_section.updatedAt'
  | 'activitiesSection.activity.activity_section.children'
  | 'activitiesSection.activity.activityDescription.id'
  | 'activitiesSection.activity.activityDescription.children'
  | 'activitiesSection.activity.activityDescription.activityDescription'
  | 'activitiesSection.activity.spaceId'
  | 'activitiesSection.activity.createdAt'
  | 'activitiesSection.activity.updatedAt'
  | 'activitiesSection.activity.sys.type'
  | 'activitiesSection.activity.sys.revision'
  | 'activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode.id'
  | 'activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode.children'
  | 'activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'activitiesSection.activity.childContentfulActivityActivityDescriptionTextNode.id'
  | 'activitiesSection.activity.childContentfulActivityActivityDescriptionTextNode.children'
  | 'activitiesSection.activity.childContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'activitiesSection.activity.parent.id'
  | 'activitiesSection.activity.parent.children'
  | 'activitiesSection.activity.children'
  | 'activitiesSection.activity.children.id'
  | 'activitiesSection.activity.children.children'
  | 'activitiesSection.activity.internal.content'
  | 'activitiesSection.activity.internal.contentDigest'
  | 'activitiesSection.activity.internal.description'
  | 'activitiesSection.activity.internal.fieldOwners'
  | 'activitiesSection.activity.internal.ignoreType'
  | 'activitiesSection.activity.internal.mediaType'
  | 'activitiesSection.activity.internal.owner'
  | 'activitiesSection.activity.internal.type'
  | 'activitiesSection.home_page'
  | 'activitiesSection.home_page.contentful_id'
  | 'activitiesSection.home_page.id'
  | 'activitiesSection.home_page.node_locale'
  | 'activitiesSection.home_page.bannerSection'
  | 'activitiesSection.home_page.bannerSection.contentful_id'
  | 'activitiesSection.home_page.bannerSection.id'
  | 'activitiesSection.home_page.bannerSection.node_locale'
  | 'activitiesSection.home_page.bannerSection.title'
  | 'activitiesSection.home_page.bannerSection.image'
  | 'activitiesSection.home_page.bannerSection.home_page'
  | 'activitiesSection.home_page.bannerSection.spaceId'
  | 'activitiesSection.home_page.bannerSection.createdAt'
  | 'activitiesSection.home_page.bannerSection.updatedAt'
  | 'activitiesSection.home_page.bannerSection.children'
  | 'activitiesSection.home_page.aboutUsSection.contentful_id'
  | 'activitiesSection.home_page.aboutUsSection.id'
  | 'activitiesSection.home_page.aboutUsSection.node_locale'
  | 'activitiesSection.home_page.aboutUsSection.sectionTitle'
  | 'activitiesSection.home_page.aboutUsSection.home_page'
  | 'activitiesSection.home_page.aboutUsSection.spaceId'
  | 'activitiesSection.home_page.aboutUsSection.createdAt'
  | 'activitiesSection.home_page.aboutUsSection.updatedAt'
  | 'activitiesSection.home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'activitiesSection.home_page.aboutUsSection.children'
  | 'activitiesSection.home_page.activitiesSection'
  | 'activitiesSection.home_page.activitiesSection.contentful_id'
  | 'activitiesSection.home_page.activitiesSection.id'
  | 'activitiesSection.home_page.activitiesSection.node_locale'
  | 'activitiesSection.home_page.activitiesSection.activitySectionTitle'
  | 'activitiesSection.home_page.activitiesSection.activity'
  | 'activitiesSection.home_page.activitiesSection.home_page'
  | 'activitiesSection.home_page.activitiesSection.spaceId'
  | 'activitiesSection.home_page.activitiesSection.createdAt'
  | 'activitiesSection.home_page.activitiesSection.updatedAt'
  | 'activitiesSection.home_page.activitiesSection.children'
  | 'activitiesSection.home_page.spaceId'
  | 'activitiesSection.home_page.createdAt'
  | 'activitiesSection.home_page.updatedAt'
  | 'activitiesSection.home_page.sys.type'
  | 'activitiesSection.home_page.sys.revision'
  | 'activitiesSection.home_page.parent.id'
  | 'activitiesSection.home_page.parent.children'
  | 'activitiesSection.home_page.children'
  | 'activitiesSection.home_page.children.id'
  | 'activitiesSection.home_page.children.children'
  | 'activitiesSection.home_page.internal.content'
  | 'activitiesSection.home_page.internal.contentDigest'
  | 'activitiesSection.home_page.internal.description'
  | 'activitiesSection.home_page.internal.fieldOwners'
  | 'activitiesSection.home_page.internal.ignoreType'
  | 'activitiesSection.home_page.internal.mediaType'
  | 'activitiesSection.home_page.internal.owner'
  | 'activitiesSection.home_page.internal.type'
  | 'activitiesSection.spaceId'
  | 'activitiesSection.createdAt'
  | 'activitiesSection.updatedAt'
  | 'activitiesSection.sys.type'
  | 'activitiesSection.sys.revision'
  | 'activitiesSection.parent.id'
  | 'activitiesSection.parent.parent.id'
  | 'activitiesSection.parent.parent.children'
  | 'activitiesSection.parent.children'
  | 'activitiesSection.parent.children.id'
  | 'activitiesSection.parent.children.children'
  | 'activitiesSection.parent.internal.content'
  | 'activitiesSection.parent.internal.contentDigest'
  | 'activitiesSection.parent.internal.description'
  | 'activitiesSection.parent.internal.fieldOwners'
  | 'activitiesSection.parent.internal.ignoreType'
  | 'activitiesSection.parent.internal.mediaType'
  | 'activitiesSection.parent.internal.owner'
  | 'activitiesSection.parent.internal.type'
  | 'activitiesSection.children'
  | 'activitiesSection.children.id'
  | 'activitiesSection.children.parent.id'
  | 'activitiesSection.children.parent.children'
  | 'activitiesSection.children.children'
  | 'activitiesSection.children.children.id'
  | 'activitiesSection.children.children.children'
  | 'activitiesSection.children.internal.content'
  | 'activitiesSection.children.internal.contentDigest'
  | 'activitiesSection.children.internal.description'
  | 'activitiesSection.children.internal.fieldOwners'
  | 'activitiesSection.children.internal.ignoreType'
  | 'activitiesSection.children.internal.mediaType'
  | 'activitiesSection.children.internal.owner'
  | 'activitiesSection.children.internal.type'
  | 'activitiesSection.internal.content'
  | 'activitiesSection.internal.contentDigest'
  | 'activitiesSection.internal.description'
  | 'activitiesSection.internal.fieldOwners'
  | 'activitiesSection.internal.ignoreType'
  | 'activitiesSection.internal.mediaType'
  | 'activitiesSection.internal.owner'
  | 'activitiesSection.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
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

type ContentfulHomePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulHomePageEdge>;
  readonly nodes: ReadonlyArray<ContentfulHomePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulHomePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulHomePageGroupConnection_distinctArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageGroupConnection_maxArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageGroupConnection_minArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageGroupConnection_sumArgs = {
  field: ContentfulHomePageFieldsEnum;
};


type ContentfulHomePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulHomePageFieldsEnum;
};

type ContentfulHomePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulHomePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulActivitySectionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulActivitySectionEdge>;
  readonly nodes: ReadonlyArray<ContentfulActivitySection>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulActivitySectionGroupConnection>;
};


type ContentfulActivitySectionConnection_distinctArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionConnection_maxArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionConnection_minArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionConnection_sumArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulActivitySectionFieldsEnum;
};

type ContentfulActivitySectionEdge = {
  readonly next: Maybe<ContentfulActivitySection>;
  readonly node: ContentfulActivitySection;
  readonly previous: Maybe<ContentfulActivitySection>;
};

type ContentfulActivitySectionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'activitySectionTitle'
  | 'activity'
  | 'activity.contentful_id'
  | 'activity.id'
  | 'activity.node_locale'
  | 'activity.activityCategory'
  | 'activity.activityImage.contentful_id'
  | 'activity.activityImage.id'
  | 'activity.activityImage.spaceId'
  | 'activity.activityImage.createdAt'
  | 'activity.activityImage.updatedAt'
  | 'activity.activityImage.file.url'
  | 'activity.activityImage.file.fileName'
  | 'activity.activityImage.file.contentType'
  | 'activity.activityImage.title'
  | 'activity.activityImage.description'
  | 'activity.activityImage.node_locale'
  | 'activity.activityImage.sys.type'
  | 'activity.activityImage.sys.revision'
  | 'activity.activityImage.fixed.base64'
  | 'activity.activityImage.fixed.tracedSVG'
  | 'activity.activityImage.fixed.aspectRatio'
  | 'activity.activityImage.fixed.width'
  | 'activity.activityImage.fixed.height'
  | 'activity.activityImage.fixed.src'
  | 'activity.activityImage.fixed.srcSet'
  | 'activity.activityImage.fixed.srcWebp'
  | 'activity.activityImage.fixed.srcSetWebp'
  | 'activity.activityImage.fluid.base64'
  | 'activity.activityImage.fluid.tracedSVG'
  | 'activity.activityImage.fluid.aspectRatio'
  | 'activity.activityImage.fluid.src'
  | 'activity.activityImage.fluid.srcSet'
  | 'activity.activityImage.fluid.srcWebp'
  | 'activity.activityImage.fluid.srcSetWebp'
  | 'activity.activityImage.fluid.sizes'
  | 'activity.activityImage.gatsbyImageData'
  | 'activity.activityImage.resize.base64'
  | 'activity.activityImage.resize.tracedSVG'
  | 'activity.activityImage.resize.src'
  | 'activity.activityImage.resize.width'
  | 'activity.activityImage.resize.height'
  | 'activity.activityImage.resize.aspectRatio'
  | 'activity.activityImage.parent.id'
  | 'activity.activityImage.parent.children'
  | 'activity.activityImage.children'
  | 'activity.activityImage.children.id'
  | 'activity.activityImage.children.children'
  | 'activity.activityImage.internal.content'
  | 'activity.activityImage.internal.contentDigest'
  | 'activity.activityImage.internal.description'
  | 'activity.activityImage.internal.fieldOwners'
  | 'activity.activityImage.internal.ignoreType'
  | 'activity.activityImage.internal.mediaType'
  | 'activity.activityImage.internal.owner'
  | 'activity.activityImage.internal.type'
  | 'activity.activity_section'
  | 'activity.activity_section.contentful_id'
  | 'activity.activity_section.id'
  | 'activity.activity_section.node_locale'
  | 'activity.activity_section.activitySectionTitle'
  | 'activity.activity_section.activity'
  | 'activity.activity_section.activity.contentful_id'
  | 'activity.activity_section.activity.id'
  | 'activity.activity_section.activity.node_locale'
  | 'activity.activity_section.activity.activityCategory'
  | 'activity.activity_section.activity.activity_section'
  | 'activity.activity_section.activity.spaceId'
  | 'activity.activity_section.activity.createdAt'
  | 'activity.activity_section.activity.updatedAt'
  | 'activity.activity_section.activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'activity.activity_section.activity.children'
  | 'activity.activity_section.home_page'
  | 'activity.activity_section.home_page.contentful_id'
  | 'activity.activity_section.home_page.id'
  | 'activity.activity_section.home_page.node_locale'
  | 'activity.activity_section.home_page.bannerSection'
  | 'activity.activity_section.home_page.activitiesSection'
  | 'activity.activity_section.home_page.spaceId'
  | 'activity.activity_section.home_page.createdAt'
  | 'activity.activity_section.home_page.updatedAt'
  | 'activity.activity_section.home_page.children'
  | 'activity.activity_section.spaceId'
  | 'activity.activity_section.createdAt'
  | 'activity.activity_section.updatedAt'
  | 'activity.activity_section.sys.type'
  | 'activity.activity_section.sys.revision'
  | 'activity.activity_section.parent.id'
  | 'activity.activity_section.parent.children'
  | 'activity.activity_section.children'
  | 'activity.activity_section.children.id'
  | 'activity.activity_section.children.children'
  | 'activity.activity_section.internal.content'
  | 'activity.activity_section.internal.contentDigest'
  | 'activity.activity_section.internal.description'
  | 'activity.activity_section.internal.fieldOwners'
  | 'activity.activity_section.internal.ignoreType'
  | 'activity.activity_section.internal.mediaType'
  | 'activity.activity_section.internal.owner'
  | 'activity.activity_section.internal.type'
  | 'activity.activityDescription.id'
  | 'activity.activityDescription.parent.id'
  | 'activity.activityDescription.parent.children'
  | 'activity.activityDescription.children'
  | 'activity.activityDescription.children.id'
  | 'activity.activityDescription.children.children'
  | 'activity.activityDescription.internal.content'
  | 'activity.activityDescription.internal.contentDigest'
  | 'activity.activityDescription.internal.description'
  | 'activity.activityDescription.internal.fieldOwners'
  | 'activity.activityDescription.internal.ignoreType'
  | 'activity.activityDescription.internal.mediaType'
  | 'activity.activityDescription.internal.owner'
  | 'activity.activityDescription.internal.type'
  | 'activity.activityDescription.activityDescription'
  | 'activity.activityDescription.sys.type'
  | 'activity.spaceId'
  | 'activity.createdAt'
  | 'activity.updatedAt'
  | 'activity.sys.type'
  | 'activity.sys.revision'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.id'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.parent.id'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.parent.children'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.children'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.children.id'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.children.children'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.content'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.contentDigest'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.description'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.fieldOwners'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.ignoreType'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.mediaType'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.owner'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.internal.type'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'activity.childrenContentfulActivityActivityDescriptionTextNode.sys.type'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.id'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.parent.id'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.parent.children'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.children'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.children.id'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.children.children'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.content'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.contentDigest'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.description'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.fieldOwners'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.ignoreType'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.mediaType'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.owner'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.internal.type'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.activityDescription'
  | 'activity.childContentfulActivityActivityDescriptionTextNode.sys.type'
  | 'activity.parent.id'
  | 'activity.parent.parent.id'
  | 'activity.parent.parent.children'
  | 'activity.parent.children'
  | 'activity.parent.children.id'
  | 'activity.parent.children.children'
  | 'activity.parent.internal.content'
  | 'activity.parent.internal.contentDigest'
  | 'activity.parent.internal.description'
  | 'activity.parent.internal.fieldOwners'
  | 'activity.parent.internal.ignoreType'
  | 'activity.parent.internal.mediaType'
  | 'activity.parent.internal.owner'
  | 'activity.parent.internal.type'
  | 'activity.children'
  | 'activity.children.id'
  | 'activity.children.parent.id'
  | 'activity.children.parent.children'
  | 'activity.children.children'
  | 'activity.children.children.id'
  | 'activity.children.children.children'
  | 'activity.children.internal.content'
  | 'activity.children.internal.contentDigest'
  | 'activity.children.internal.description'
  | 'activity.children.internal.fieldOwners'
  | 'activity.children.internal.ignoreType'
  | 'activity.children.internal.mediaType'
  | 'activity.children.internal.owner'
  | 'activity.children.internal.type'
  | 'activity.internal.content'
  | 'activity.internal.contentDigest'
  | 'activity.internal.description'
  | 'activity.internal.fieldOwners'
  | 'activity.internal.ignoreType'
  | 'activity.internal.mediaType'
  | 'activity.internal.owner'
  | 'activity.internal.type'
  | 'home_page'
  | 'home_page.contentful_id'
  | 'home_page.id'
  | 'home_page.node_locale'
  | 'home_page.bannerSection'
  | 'home_page.bannerSection.contentful_id'
  | 'home_page.bannerSection.id'
  | 'home_page.bannerSection.node_locale'
  | 'home_page.bannerSection.title'
  | 'home_page.bannerSection.image'
  | 'home_page.bannerSection.image.contentful_id'
  | 'home_page.bannerSection.image.id'
  | 'home_page.bannerSection.image.spaceId'
  | 'home_page.bannerSection.image.createdAt'
  | 'home_page.bannerSection.image.updatedAt'
  | 'home_page.bannerSection.image.title'
  | 'home_page.bannerSection.image.description'
  | 'home_page.bannerSection.image.node_locale'
  | 'home_page.bannerSection.image.gatsbyImageData'
  | 'home_page.bannerSection.image.children'
  | 'home_page.bannerSection.home_page'
  | 'home_page.bannerSection.home_page.contentful_id'
  | 'home_page.bannerSection.home_page.id'
  | 'home_page.bannerSection.home_page.node_locale'
  | 'home_page.bannerSection.home_page.bannerSection'
  | 'home_page.bannerSection.home_page.activitiesSection'
  | 'home_page.bannerSection.home_page.spaceId'
  | 'home_page.bannerSection.home_page.createdAt'
  | 'home_page.bannerSection.home_page.updatedAt'
  | 'home_page.bannerSection.home_page.children'
  | 'home_page.bannerSection.spaceId'
  | 'home_page.bannerSection.createdAt'
  | 'home_page.bannerSection.updatedAt'
  | 'home_page.bannerSection.sys.type'
  | 'home_page.bannerSection.sys.revision'
  | 'home_page.bannerSection.parent.id'
  | 'home_page.bannerSection.parent.children'
  | 'home_page.bannerSection.children'
  | 'home_page.bannerSection.children.id'
  | 'home_page.bannerSection.children.children'
  | 'home_page.bannerSection.internal.content'
  | 'home_page.bannerSection.internal.contentDigest'
  | 'home_page.bannerSection.internal.description'
  | 'home_page.bannerSection.internal.fieldOwners'
  | 'home_page.bannerSection.internal.ignoreType'
  | 'home_page.bannerSection.internal.mediaType'
  | 'home_page.bannerSection.internal.owner'
  | 'home_page.bannerSection.internal.type'
  | 'home_page.aboutUsSection.contentful_id'
  | 'home_page.aboutUsSection.id'
  | 'home_page.aboutUsSection.node_locale'
  | 'home_page.aboutUsSection.sectionTitle'
  | 'home_page.aboutUsSection.home_page'
  | 'home_page.aboutUsSection.home_page.contentful_id'
  | 'home_page.aboutUsSection.home_page.id'
  | 'home_page.aboutUsSection.home_page.node_locale'
  | 'home_page.aboutUsSection.home_page.bannerSection'
  | 'home_page.aboutUsSection.home_page.activitiesSection'
  | 'home_page.aboutUsSection.home_page.spaceId'
  | 'home_page.aboutUsSection.home_page.createdAt'
  | 'home_page.aboutUsSection.home_page.updatedAt'
  | 'home_page.aboutUsSection.home_page.children'
  | 'home_page.aboutUsSection.aboutUsDescription.id'
  | 'home_page.aboutUsSection.aboutUsDescription.children'
  | 'home_page.aboutUsSection.aboutUsDescription.aboutUsDescription'
  | 'home_page.aboutUsSection.spaceId'
  | 'home_page.aboutUsSection.createdAt'
  | 'home_page.aboutUsSection.updatedAt'
  | 'home_page.aboutUsSection.sys.type'
  | 'home_page.aboutUsSection.sys.revision'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'home_page.aboutUsSection.childrenContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.id'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.children'
  | 'home_page.aboutUsSection.childContentfulAboutUsAboutUsDescriptionTextNode.aboutUsDescription'
  | 'home_page.aboutUsSection.parent.id'
  | 'home_page.aboutUsSection.parent.children'
  | 'home_page.aboutUsSection.children'
  | 'home_page.aboutUsSection.children.id'
  | 'home_page.aboutUsSection.children.children'
  | 'home_page.aboutUsSection.internal.content'
  | 'home_page.aboutUsSection.internal.contentDigest'
  | 'home_page.aboutUsSection.internal.description'
  | 'home_page.aboutUsSection.internal.fieldOwners'
  | 'home_page.aboutUsSection.internal.ignoreType'
  | 'home_page.aboutUsSection.internal.mediaType'
  | 'home_page.aboutUsSection.internal.owner'
  | 'home_page.aboutUsSection.internal.type'
  | 'home_page.activitiesSection'
  | 'home_page.activitiesSection.contentful_id'
  | 'home_page.activitiesSection.id'
  | 'home_page.activitiesSection.node_locale'
  | 'home_page.activitiesSection.activitySectionTitle'
  | 'home_page.activitiesSection.activity'
  | 'home_page.activitiesSection.activity.contentful_id'
  | 'home_page.activitiesSection.activity.id'
  | 'home_page.activitiesSection.activity.node_locale'
  | 'home_page.activitiesSection.activity.activityCategory'
  | 'home_page.activitiesSection.activity.activity_section'
  | 'home_page.activitiesSection.activity.spaceId'
  | 'home_page.activitiesSection.activity.createdAt'
  | 'home_page.activitiesSection.activity.updatedAt'
  | 'home_page.activitiesSection.activity.childrenContentfulActivityActivityDescriptionTextNode'
  | 'home_page.activitiesSection.activity.children'
  | 'home_page.activitiesSection.home_page'
  | 'home_page.activitiesSection.home_page.contentful_id'
  | 'home_page.activitiesSection.home_page.id'
  | 'home_page.activitiesSection.home_page.node_locale'
  | 'home_page.activitiesSection.home_page.bannerSection'
  | 'home_page.activitiesSection.home_page.activitiesSection'
  | 'home_page.activitiesSection.home_page.spaceId'
  | 'home_page.activitiesSection.home_page.createdAt'
  | 'home_page.activitiesSection.home_page.updatedAt'
  | 'home_page.activitiesSection.home_page.children'
  | 'home_page.activitiesSection.spaceId'
  | 'home_page.activitiesSection.createdAt'
  | 'home_page.activitiesSection.updatedAt'
  | 'home_page.activitiesSection.sys.type'
  | 'home_page.activitiesSection.sys.revision'
  | 'home_page.activitiesSection.parent.id'
  | 'home_page.activitiesSection.parent.children'
  | 'home_page.activitiesSection.children'
  | 'home_page.activitiesSection.children.id'
  | 'home_page.activitiesSection.children.children'
  | 'home_page.activitiesSection.internal.content'
  | 'home_page.activitiesSection.internal.contentDigest'
  | 'home_page.activitiesSection.internal.description'
  | 'home_page.activitiesSection.internal.fieldOwners'
  | 'home_page.activitiesSection.internal.ignoreType'
  | 'home_page.activitiesSection.internal.mediaType'
  | 'home_page.activitiesSection.internal.owner'
  | 'home_page.activitiesSection.internal.type'
  | 'home_page.spaceId'
  | 'home_page.createdAt'
  | 'home_page.updatedAt'
  | 'home_page.sys.type'
  | 'home_page.sys.revision'
  | 'home_page.parent.id'
  | 'home_page.parent.parent.id'
  | 'home_page.parent.parent.children'
  | 'home_page.parent.children'
  | 'home_page.parent.children.id'
  | 'home_page.parent.children.children'
  | 'home_page.parent.internal.content'
  | 'home_page.parent.internal.contentDigest'
  | 'home_page.parent.internal.description'
  | 'home_page.parent.internal.fieldOwners'
  | 'home_page.parent.internal.ignoreType'
  | 'home_page.parent.internal.mediaType'
  | 'home_page.parent.internal.owner'
  | 'home_page.parent.internal.type'
  | 'home_page.children'
  | 'home_page.children.id'
  | 'home_page.children.parent.id'
  | 'home_page.children.parent.children'
  | 'home_page.children.children'
  | 'home_page.children.children.id'
  | 'home_page.children.children.children'
  | 'home_page.children.internal.content'
  | 'home_page.children.internal.contentDigest'
  | 'home_page.children.internal.description'
  | 'home_page.children.internal.fieldOwners'
  | 'home_page.children.internal.ignoreType'
  | 'home_page.children.internal.mediaType'
  | 'home_page.children.internal.owner'
  | 'home_page.children.internal.type'
  | 'home_page.internal.content'
  | 'home_page.internal.contentDigest'
  | 'home_page.internal.description'
  | 'home_page.internal.fieldOwners'
  | 'home_page.internal.ignoreType'
  | 'home_page.internal.mediaType'
  | 'home_page.internal.owner'
  | 'home_page.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
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

type ContentfulActivitySectionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulActivitySectionEdge>;
  readonly nodes: ReadonlyArray<ContentfulActivitySection>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulActivitySectionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulActivitySectionGroupConnection_distinctArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionGroupConnection_maxArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionGroupConnection_minArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionGroupConnection_sumArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


type ContentfulActivitySectionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulActivitySectionFieldsEnum;
};

type ContentfulActivitySectionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulActivitySectionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulActivityActivityDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulActivityActivityDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulActivityActivityDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulActivityActivityDescriptionTextNodeGroupConnection>;
};


type contentfulActivityActivityDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeConnection_maxArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeConnection_minArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeConnection_sumArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};

type contentfulActivityActivityDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulActivityActivityDescriptionTextNode>;
  readonly node: contentfulActivityActivityDescriptionTextNode;
  readonly previous: Maybe<contentfulActivityActivityDescriptionTextNode>;
};

type contentfulActivityActivityDescriptionTextNodeFieldsEnum =
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
  | 'activityDescription'
  | 'sys.type';

type contentfulActivityActivityDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulActivityActivityDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulActivityActivityDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulActivityActivityDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulActivityActivityDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


type contentfulActivityActivityDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulActivityActivityDescriptionTextNodeFieldsEnum;
};

type contentfulActivityActivityDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulActivityActivityDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAboutUsAboutUsDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAboutUsAboutUsDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAboutUsAboutUsDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection>;
};


type contentfulAboutUsAboutUsDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeConnection_maxArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeConnection_minArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeConnection_sumArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};

type contentfulAboutUsAboutUsDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulAboutUsAboutUsDescriptionTextNode>;
  readonly node: contentfulAboutUsAboutUsDescriptionTextNode;
  readonly previous: Maybe<contentfulAboutUsAboutUsDescriptionTextNode>;
};

type contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum =
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
  | 'aboutUsDescription'
  | 'sys.type';

type contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAboutUsAboutUsDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAboutUsAboutUsDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


type contentfulAboutUsAboutUsDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};

type contentfulAboutUsAboutUsDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
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
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author' | 'description' | 'keywords' | 'siteUrl' | 'title'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly themeUiConfig: Maybe<Pick<ThemeUiConfig, 'preset' | 'prismPreset'>> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}