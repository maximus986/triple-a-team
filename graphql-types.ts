export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginPluginOptions = {
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  preset?: Maybe<SitePluginPluginOptionsPreset>;
  basePath?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  enableTags?: Maybe<Scalars['Boolean']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPreset = {
  baseColors?: Maybe<SitePluginPluginOptionsPresetBaseColors>;
  bootstrap?: Maybe<SitePluginPluginOptionsPresetBootstrap>;
  breakpoints?: Maybe<Array<Maybe<Scalars['String']>>>;
  colors?: Maybe<SitePluginPluginOptionsPresetColors>;
  default?: Maybe<SitePluginPluginOptionsPresetDefault>;
  fontSizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetFontWeights>;
  fonts?: Maybe<SitePluginPluginOptionsPresetFonts>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetLineHeights>;
  radii?: Maybe<SitePluginPluginOptionsPresetRadii>;
  shadows?: Maybe<SitePluginPluginOptionsPresetShadows>;
  sizes?: Maybe<SitePluginPluginOptionsPresetSizes>;
  space?: Maybe<Array<Maybe<Scalars['String']>>>;
  styles?: Maybe<SitePluginPluginOptionsPresetStyles>;
};

export type SitePluginPluginOptionsPresetBaseColors = {
  white?: Maybe<Scalars['String']>;
  black?: Maybe<Scalars['String']>;
  gray?: Maybe<Array<Maybe<Scalars['String']>>>;
  blue?: Maybe<Scalars['String']>;
  indigo?: Maybe<Scalars['String']>;
  purple?: Maybe<Scalars['String']>;
  pink?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['String']>;
  orange?: Maybe<Scalars['String']>;
  yellow?: Maybe<Scalars['String']>;
  green?: Maybe<Scalars['String']>;
  teal?: Maybe<Scalars['String']>;
  cyan?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrap = {
  breakpoints?: Maybe<Array<Maybe<Scalars['String']>>>;
  colors?: Maybe<SitePluginPluginOptionsPresetBootstrapColors>;
  space?: Maybe<Array<Maybe<Scalars['String']>>>;
  fonts?: Maybe<SitePluginPluginOptionsPresetBootstrapFonts>;
  fontSizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetBootstrapFontWeights>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetBootstrapLineHeights>;
  sizes?: Maybe<SitePluginPluginOptionsPresetBootstrapSizes>;
  shadows?: Maybe<SitePluginPluginOptionsPresetBootstrapShadows>;
  radii?: Maybe<SitePluginPluginOptionsPresetBootstrapRadii>;
  text?: Maybe<SitePluginPluginOptionsPresetBootstrapText>;
  styles?: Maybe<SitePluginPluginOptionsPresetBootstrapStyles>;
};

export type SitePluginPluginOptionsPresetBootstrapColors = {
  white?: Maybe<Scalars['String']>;
  black?: Maybe<Scalars['String']>;
  gray?: Maybe<Array<Maybe<Scalars['String']>>>;
  blue?: Maybe<Scalars['String']>;
  indigo?: Maybe<Scalars['String']>;
  purple?: Maybe<Scalars['String']>;
  pink?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['String']>;
  orange?: Maybe<Scalars['String']>;
  yellow?: Maybe<Scalars['String']>;
  green?: Maybe<Scalars['String']>;
  teal?: Maybe<Scalars['String']>;
  cyan?: Maybe<Scalars['String']>;
  grayDark?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  warning?: Maybe<Scalars['String']>;
  danger?: Maybe<Scalars['String']>;
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
  textMuted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
  sans?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
  light?: Maybe<Scalars['Int']>;
  normal?: Maybe<Scalars['Int']>;
  display?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetBootstrapSizes = {
  sm?: Maybe<Scalars['Int']>;
  md?: Maybe<Scalars['Int']>;
  lg?: Maybe<Scalars['Int']>;
  xl?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapShadows = {
  default?: Maybe<Scalars['String']>;
  sm?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapRadii = {
  default?: Maybe<Scalars['String']>;
  sm?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
  pill?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapText = {
  heading?: Maybe<SitePluginPluginOptionsPresetBootstrapTextHeading>;
  display?: Maybe<SitePluginPluginOptionsPresetBootstrapTextDisplay>;
};

export type SitePluginPluginOptionsPresetBootstrapTextHeading = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapTextDisplay = {
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesRoot>;
  a?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesA>;
  p?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesP>;
  h1?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH6>;
  blockquote?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesBlockquote>;
  table?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTd>;
  inlineCode?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesInlineCode>;
  img?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesImg>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesA = {
  color?: Maybe<Scalars['String']>;
  textDecoration?: Maybe<Scalars['String']>;
  _hover?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesA_Hover>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesA_Hover = {
  textDecoration?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesP = {
  mb?: Maybe<Scalars['Int']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH1 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH2 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH3 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH4 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH5 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH6 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesBlockquote = {
  fontSize?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesTable = {
  width?: Maybe<Scalars['String']>;
  marginBottom?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesTh = {
  verticalAlign?: Maybe<Scalars['String']>;
  borderTopWidth?: Maybe<Scalars['Int']>;
  borderTopStyle?: Maybe<Scalars['String']>;
  borderTopColor?: Maybe<Scalars['String']>;
  borderBottomWidth?: Maybe<Scalars['Int']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
  borderBottomColor?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesTd = {
  borderBottomWidth?: Maybe<Scalars['Int']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
  borderBottomColor?: Maybe<Scalars['String']>;
  verticalAlign?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesInlineCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetColors = {
  white?: Maybe<Scalars['String']>;
  black?: Maybe<Scalars['String']>;
  gray?: Maybe<Array<Maybe<Scalars['String']>>>;
  blue?: Maybe<Scalars['String']>;
  indigo?: Maybe<Scalars['String']>;
  purple?: Maybe<Scalars['String']>;
  pink?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['String']>;
  orange?: Maybe<Scalars['String']>;
  yellow?: Maybe<Scalars['String']>;
  green?: Maybe<Scalars['String']>;
  teal?: Maybe<Scalars['String']>;
  cyan?: Maybe<Scalars['String']>;
  grayDark?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  warning?: Maybe<Scalars['String']>;
  danger?: Maybe<Scalars['String']>;
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
  textMuted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefault = {
  breakpoints?: Maybe<Array<Maybe<Scalars['String']>>>;
  colors?: Maybe<SitePluginPluginOptionsPresetDefaultColors>;
  space?: Maybe<Array<Maybe<Scalars['String']>>>;
  fonts?: Maybe<SitePluginPluginOptionsPresetDefaultFonts>;
  fontSizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetDefaultFontWeights>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetDefaultLineHeights>;
  sizes?: Maybe<SitePluginPluginOptionsPresetDefaultSizes>;
  shadows?: Maybe<SitePluginPluginOptionsPresetDefaultShadows>;
  radii?: Maybe<SitePluginPluginOptionsPresetDefaultRadii>;
  text?: Maybe<SitePluginPluginOptionsPresetDefaultText>;
  styles?: Maybe<SitePluginPluginOptionsPresetDefaultStyles>;
};

export type SitePluginPluginOptionsPresetDefaultColors = {
  white?: Maybe<Scalars['String']>;
  black?: Maybe<Scalars['String']>;
  gray?: Maybe<Array<Maybe<Scalars['String']>>>;
  blue?: Maybe<Scalars['String']>;
  indigo?: Maybe<Scalars['String']>;
  purple?: Maybe<Scalars['String']>;
  pink?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['String']>;
  orange?: Maybe<Scalars['String']>;
  yellow?: Maybe<Scalars['String']>;
  green?: Maybe<Scalars['String']>;
  teal?: Maybe<Scalars['String']>;
  cyan?: Maybe<Scalars['String']>;
  grayDark?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  warning?: Maybe<Scalars['String']>;
  danger?: Maybe<Scalars['String']>;
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
  textMuted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
  sans?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
  light?: Maybe<Scalars['Int']>;
  normal?: Maybe<Scalars['Int']>;
  display?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetDefaultSizes = {
  sm?: Maybe<Scalars['Int']>;
  md?: Maybe<Scalars['Int']>;
  lg?: Maybe<Scalars['Int']>;
  xl?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultShadows = {
  default?: Maybe<Scalars['String']>;
  sm?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultRadii = {
  default?: Maybe<Scalars['String']>;
  sm?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
  pill?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultText = {
  heading?: Maybe<SitePluginPluginOptionsPresetDefaultTextHeading>;
  display?: Maybe<SitePluginPluginOptionsPresetDefaultTextDisplay>;
};

export type SitePluginPluginOptionsPresetDefaultTextHeading = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultTextDisplay = {
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetDefaultStylesRoot>;
  a?: Maybe<SitePluginPluginOptionsPresetDefaultStylesA>;
  p?: Maybe<SitePluginPluginOptionsPresetDefaultStylesP>;
  h1?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6>;
  blockquote?: Maybe<SitePluginPluginOptionsPresetDefaultStylesBlockquote>;
  table?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTd>;
  inlineCode?: Maybe<SitePluginPluginOptionsPresetDefaultStylesInlineCode>;
  img?: Maybe<SitePluginPluginOptionsPresetDefaultStylesImg>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesA = {
  color?: Maybe<Scalars['String']>;
  textDecoration?: Maybe<Scalars['String']>;
  _hover?: Maybe<SitePluginPluginOptionsPresetDefaultStylesA_Hover>;
};

export type SitePluginPluginOptionsPresetDefaultStylesA_Hover = {
  textDecoration?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesP = {
  mb?: Maybe<Scalars['Int']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesBlockquote = {
  fontSize?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTable = {
  width?: Maybe<Scalars['String']>;
  marginBottom?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTh = {
  verticalAlign?: Maybe<Scalars['String']>;
  borderTopWidth?: Maybe<Scalars['Int']>;
  borderTopStyle?: Maybe<Scalars['String']>;
  borderTopColor?: Maybe<Scalars['String']>;
  borderBottomWidth?: Maybe<Scalars['Int']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
  borderBottomColor?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTd = {
  borderBottomWidth?: Maybe<Scalars['Int']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
  borderBottomColor?: Maybe<Scalars['String']>;
  verticalAlign?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesInlineCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
  light?: Maybe<Scalars['Int']>;
  normal?: Maybe<Scalars['Int']>;
  display?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
  sans?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetRadii = {
  default?: Maybe<Scalars['String']>;
  sm?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
  pill?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetShadows = {
  default?: Maybe<Scalars['String']>;
  sm?: Maybe<Scalars['String']>;
  lg?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetSizes = {
  sm?: Maybe<Scalars['Int']>;
  md?: Maybe<Scalars['Int']>;
  lg?: Maybe<Scalars['Int']>;
  xl?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetStylesRoot>;
  a?: Maybe<SitePluginPluginOptionsPresetStylesA>;
  p?: Maybe<SitePluginPluginOptionsPresetStylesP>;
  h1?: Maybe<SitePluginPluginOptionsPresetStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetStylesH6>;
  blockquote?: Maybe<SitePluginPluginOptionsPresetStylesBlockquote>;
  table?: Maybe<SitePluginPluginOptionsPresetStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetStylesTd>;
  inlineCode?: Maybe<SitePluginPluginOptionsPresetStylesInlineCode>;
  img?: Maybe<SitePluginPluginOptionsPresetStylesImg>;
};

export type SitePluginPluginOptionsPresetStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesA = {
  color?: Maybe<Scalars['String']>;
  textDecoration?: Maybe<Scalars['String']>;
  _hover?: Maybe<SitePluginPluginOptionsPresetStylesA_Hover>;
};

export type SitePluginPluginOptionsPresetStylesA_Hover = {
  textDecoration?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesP = {
  mb?: Maybe<Scalars['Int']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesH1 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesH2 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesH3 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesH4 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesH5 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesH6 = {
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  mt?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesBlockquote = {
  fontSize?: Maybe<Scalars['Int']>;
  mb?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetStylesTable = {
  width?: Maybe<Scalars['String']>;
  marginBottom?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesTh = {
  verticalAlign?: Maybe<Scalars['String']>;
  borderTopWidth?: Maybe<Scalars['Int']>;
  borderTopStyle?: Maybe<Scalars['String']>;
  borderTopColor?: Maybe<Scalars['String']>;
  borderBottomWidth?: Maybe<Scalars['Int']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
  borderBottomColor?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesTd = {
  borderBottomWidth?: Maybe<Scalars['Int']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
  borderBottomColor?: Maybe<Scalars['String']>;
  verticalAlign?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesInlineCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  fluid?: Maybe<ContentfulFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  cornerRadius?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ContentfulImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulBanner = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<ContentfulAsset>>>;
  home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBannerSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBannerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBannerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBannerSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBannerSysContentType>;
};

export type ContentfulBannerSysContentType = {
  sys?: Maybe<ContentfulBannerSysContentTypeSys>;
};

export type ContentfulBannerSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAboutUs = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  sectionTitle?: Maybe<Scalars['String']>;
  home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>;
  aboutUsDescription?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAboutUsSys>;
  /** Returns all children nodes filtered by type contentfulAboutUsAboutUsDescriptionTextNode */
  childrenContentfulAboutUsAboutUsDescriptionTextNode?: Maybe<Array<Maybe<ContentfulAboutUsAboutUsDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulAboutUsAboutUsDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulAboutUsAboutUsDescriptionTextNode?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAboutUsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAboutUsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAboutUsSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAboutUsSysContentType>;
};

export type ContentfulAboutUsSysContentType = {
  sys?: Maybe<ContentfulAboutUsSysContentTypeSys>;
};

export type ContentfulAboutUsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulActivity = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  activityCategory?: Maybe<Scalars['String']>;
  activityImage?: Maybe<ContentfulAsset>;
  activity_section?: Maybe<Array<Maybe<ContentfulActivitySection>>>;
  activityDescription?: Maybe<ContentfulActivityActivityDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulActivitySys>;
  /** Returns all children nodes filtered by type contentfulActivityActivityDescriptionTextNode */
  childrenContentfulActivityActivityDescriptionTextNode?: Maybe<Array<Maybe<ContentfulActivityActivityDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulActivityActivityDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulActivityActivityDescriptionTextNode?: Maybe<ContentfulActivityActivityDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulActivityCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulActivityUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulActivitySys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulActivitySysContentType>;
};

export type ContentfulActivitySysContentType = {
  sys?: Maybe<ContentfulActivitySysContentTypeSys>;
};

export type ContentfulActivitySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHomePage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  bannerSection?: Maybe<Array<Maybe<ContentfulBanner>>>;
  aboutUsSection?: Maybe<ContentfulAboutUs>;
  activitiesSection?: Maybe<Array<Maybe<ContentfulActivitySection>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHomePageSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHomePageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHomePageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHomePageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHomePageSysContentType>;
};

export type ContentfulHomePageSysContentType = {
  sys?: Maybe<ContentfulHomePageSysContentTypeSys>;
};

export type ContentfulHomePageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulActivitySection = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  activitySectionTitle?: Maybe<Scalars['String']>;
  activity?: Maybe<Array<Maybe<ContentfulActivity>>>;
  home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulActivitySectionSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulActivitySectionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulActivitySectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulActivitySectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulActivitySectionSysContentType>;
};

export type ContentfulActivitySectionSysContentType = {
  sys?: Maybe<ContentfulActivitySectionSysContentTypeSys>;
};

export type ContentfulActivitySectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulActivityActivityDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  activityDescription?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulActivityActivityDescriptionTextNodeSys>;
};

export type ContentfulActivityActivityDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  aboutUsDescription?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeSys>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulBanner?: Maybe<ContentfulBanner>;
  allContentfulBanner: ContentfulBannerConnection;
  contentfulAboutUs?: Maybe<ContentfulAboutUs>;
  allContentfulAboutUs: ContentfulAboutUsConnection;
  contentfulActivity?: Maybe<ContentfulActivity>;
  allContentfulActivity: ContentfulActivityConnection;
  contentfulHomePage?: Maybe<ContentfulHomePage>;
  allContentfulHomePage: ContentfulHomePageConnection;
  contentfulActivitySection?: Maybe<ContentfulActivitySection>;
  allContentfulActivitySection: ContentfulActivitySectionConnection;
  contentfulActivityActivityDescriptionTextNode?: Maybe<ContentfulActivityActivityDescriptionTextNode>;
  allContentfulActivityActivityDescriptionTextNode: ContentfulActivityActivityDescriptionTextNodeConnection;
  contentfulAboutUsAboutUsDescriptionTextNode?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNode>;
  allContentfulAboutUsAboutUsDescriptionTextNode: ContentfulAboutUsAboutUsDescriptionTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryThemeUiConfigArgs = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter?: Maybe<ThemeUiConfigFilterInput>;
  sort?: Maybe<ThemeUiConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBannerArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterListInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBannerArgs = {
  filter?: Maybe<ContentfulBannerFilterInput>;
  sort?: Maybe<ContentfulBannerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutUsArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sectionTitle?: Maybe<StringQueryOperatorInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  aboutUsDescription?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutUsSysFilterInput>;
  childrenContentfulAboutUsAboutUsDescriptionTextNode?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterListInput>;
  childContentfulAboutUsAboutUsDescriptionTextNode?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAboutUsArgs = {
  filter?: Maybe<ContentfulAboutUsFilterInput>;
  sort?: Maybe<ContentfulAboutUsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulActivityArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  activityCategory?: Maybe<StringQueryOperatorInput>;
  activityImage?: Maybe<ContentfulAssetFilterInput>;
  activity_section?: Maybe<ContentfulActivitySectionFilterListInput>;
  activityDescription?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulActivitySysFilterInput>;
  childrenContentfulActivityActivityDescriptionTextNode?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterListInput>;
  childContentfulActivityActivityDescriptionTextNode?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulActivityArgs = {
  filter?: Maybe<ContentfulActivityFilterInput>;
  sort?: Maybe<ContentfulActivitySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHomePageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  bannerSection?: Maybe<ContentfulBannerFilterListInput>;
  aboutUsSection?: Maybe<ContentfulAboutUsFilterInput>;
  activitiesSection?: Maybe<ContentfulActivitySectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHomePageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulHomePageArgs = {
  filter?: Maybe<ContentfulHomePageFilterInput>;
  sort?: Maybe<ContentfulHomePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulActivitySectionArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  activitySectionTitle?: Maybe<StringQueryOperatorInput>;
  activity?: Maybe<ContentfulActivityFilterListInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulActivitySectionSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulActivitySectionArgs = {
  filter?: Maybe<ContentfulActivitySectionFilterInput>;
  sort?: Maybe<ContentfulActivitySectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulActivityActivityDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  activityDescription?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulActivityActivityDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulActivityActivityDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulActivityActivityDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutUsAboutUsDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutUsDescription?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulAboutUsAboutUsDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
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
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
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
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___keywords'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  preset?: Maybe<SitePluginPluginOptionsPresetFilterInput>;
  basePath?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  enableTags?: Maybe<BooleanQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFilterInput = {
  baseColors?: Maybe<SitePluginPluginOptionsPresetBaseColorsFilterInput>;
  bootstrap?: Maybe<SitePluginPluginOptionsPresetBootstrapFilterInput>;
  breakpoints?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetColorsFilterInput>;
  default?: Maybe<SitePluginPluginOptionsPresetDefaultFilterInput>;
  fontSizes?: Maybe<StringQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetFontWeightsFilterInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetFontsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetLineHeightsFilterInput>;
  radii?: Maybe<SitePluginPluginOptionsPresetRadiiFilterInput>;
  shadows?: Maybe<SitePluginPluginOptionsPresetShadowsFilterInput>;
  sizes?: Maybe<SitePluginPluginOptionsPresetSizesFilterInput>;
  space?: Maybe<StringQueryOperatorInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseColorsFilterInput = {
  white?: Maybe<StringQueryOperatorInput>;
  black?: Maybe<StringQueryOperatorInput>;
  gray?: Maybe<StringQueryOperatorInput>;
  blue?: Maybe<StringQueryOperatorInput>;
  indigo?: Maybe<StringQueryOperatorInput>;
  purple?: Maybe<StringQueryOperatorInput>;
  pink?: Maybe<StringQueryOperatorInput>;
  red?: Maybe<StringQueryOperatorInput>;
  orange?: Maybe<StringQueryOperatorInput>;
  yellow?: Maybe<StringQueryOperatorInput>;
  green?: Maybe<StringQueryOperatorInput>;
  teal?: Maybe<StringQueryOperatorInput>;
  cyan?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapFilterInput = {
  breakpoints?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetBootstrapColorsFilterInput>;
  space?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetBootstrapFontsFilterInput>;
  fontSizes?: Maybe<StringQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetBootstrapFontWeightsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetBootstrapLineHeightsFilterInput>;
  sizes?: Maybe<SitePluginPluginOptionsPresetBootstrapSizesFilterInput>;
  shadows?: Maybe<SitePluginPluginOptionsPresetBootstrapShadowsFilterInput>;
  radii?: Maybe<SitePluginPluginOptionsPresetBootstrapRadiiFilterInput>;
  text?: Maybe<SitePluginPluginOptionsPresetBootstrapTextFilterInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetBootstrapColorsFilterInput = {
  white?: Maybe<StringQueryOperatorInput>;
  black?: Maybe<StringQueryOperatorInput>;
  gray?: Maybe<StringQueryOperatorInput>;
  blue?: Maybe<StringQueryOperatorInput>;
  indigo?: Maybe<StringQueryOperatorInput>;
  purple?: Maybe<StringQueryOperatorInput>;
  pink?: Maybe<StringQueryOperatorInput>;
  red?: Maybe<StringQueryOperatorInput>;
  orange?: Maybe<StringQueryOperatorInput>;
  yellow?: Maybe<StringQueryOperatorInput>;
  green?: Maybe<StringQueryOperatorInput>;
  teal?: Maybe<StringQueryOperatorInput>;
  cyan?: Maybe<StringQueryOperatorInput>;
  grayDark?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
  success?: Maybe<StringQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  warning?: Maybe<StringQueryOperatorInput>;
  danger?: Maybe<StringQueryOperatorInput>;
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
  textMuted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
  sans?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
  light?: Maybe<IntQueryOperatorInput>;
  normal?: Maybe<IntQueryOperatorInput>;
  display?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapSizesFilterInput = {
  sm?: Maybe<IntQueryOperatorInput>;
  md?: Maybe<IntQueryOperatorInput>;
  lg?: Maybe<IntQueryOperatorInput>;
  xl?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapShadowsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  sm?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapRadiiFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  sm?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
  pill?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapTextFilterInput = {
  heading?: Maybe<SitePluginPluginOptionsPresetBootstrapTextHeadingFilterInput>;
  display?: Maybe<SitePluginPluginOptionsPresetBootstrapTextDisplayFilterInput>;
};

export type SitePluginPluginOptionsPresetBootstrapTextHeadingFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapTextDisplayFilterInput = {
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesRootFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesAFilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesPFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesH6FilterInput>;
  blockquote?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesBlockquoteFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesTdFilterInput>;
  inlineCode?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesInlineCodeFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  textDecoration?: Maybe<StringQueryOperatorInput>;
  _hover?: Maybe<SitePluginPluginOptionsPresetBootstrapStylesA_HoverFilterInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesA_HoverFilterInput = {
  textDecoration?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesPFilterInput = {
  mb?: Maybe<IntQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH1FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH2FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH3FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH4FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH5FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesH6FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesBlockquoteFilterInput = {
  fontSize?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  marginBottom?: Maybe<IntQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesThFilterInput = {
  verticalAlign?: Maybe<StringQueryOperatorInput>;
  borderTopWidth?: Maybe<IntQueryOperatorInput>;
  borderTopStyle?: Maybe<StringQueryOperatorInput>;
  borderTopColor?: Maybe<StringQueryOperatorInput>;
  borderBottomWidth?: Maybe<IntQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
  borderBottomColor?: Maybe<StringQueryOperatorInput>;
  padding?: Maybe<StringQueryOperatorInput>;
  textAlign?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesTdFilterInput = {
  borderBottomWidth?: Maybe<IntQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
  borderBottomColor?: Maybe<StringQueryOperatorInput>;
  verticalAlign?: Maybe<StringQueryOperatorInput>;
  padding?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesInlineCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBootstrapStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetColorsFilterInput = {
  white?: Maybe<StringQueryOperatorInput>;
  black?: Maybe<StringQueryOperatorInput>;
  gray?: Maybe<StringQueryOperatorInput>;
  blue?: Maybe<StringQueryOperatorInput>;
  indigo?: Maybe<StringQueryOperatorInput>;
  purple?: Maybe<StringQueryOperatorInput>;
  pink?: Maybe<StringQueryOperatorInput>;
  red?: Maybe<StringQueryOperatorInput>;
  orange?: Maybe<StringQueryOperatorInput>;
  yellow?: Maybe<StringQueryOperatorInput>;
  green?: Maybe<StringQueryOperatorInput>;
  teal?: Maybe<StringQueryOperatorInput>;
  cyan?: Maybe<StringQueryOperatorInput>;
  grayDark?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
  success?: Maybe<StringQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  warning?: Maybe<StringQueryOperatorInput>;
  danger?: Maybe<StringQueryOperatorInput>;
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
  textMuted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFilterInput = {
  breakpoints?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetDefaultColorsFilterInput>;
  space?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetDefaultFontsFilterInput>;
  fontSizes?: Maybe<StringQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput>;
  sizes?: Maybe<SitePluginPluginOptionsPresetDefaultSizesFilterInput>;
  shadows?: Maybe<SitePluginPluginOptionsPresetDefaultShadowsFilterInput>;
  radii?: Maybe<SitePluginPluginOptionsPresetDefaultRadiiFilterInput>;
  text?: Maybe<SitePluginPluginOptionsPresetDefaultTextFilterInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetDefaultStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultColorsFilterInput = {
  white?: Maybe<StringQueryOperatorInput>;
  black?: Maybe<StringQueryOperatorInput>;
  gray?: Maybe<StringQueryOperatorInput>;
  blue?: Maybe<StringQueryOperatorInput>;
  indigo?: Maybe<StringQueryOperatorInput>;
  purple?: Maybe<StringQueryOperatorInput>;
  pink?: Maybe<StringQueryOperatorInput>;
  red?: Maybe<StringQueryOperatorInput>;
  orange?: Maybe<StringQueryOperatorInput>;
  yellow?: Maybe<StringQueryOperatorInput>;
  green?: Maybe<StringQueryOperatorInput>;
  teal?: Maybe<StringQueryOperatorInput>;
  cyan?: Maybe<StringQueryOperatorInput>;
  grayDark?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
  success?: Maybe<StringQueryOperatorInput>;
  info?: Maybe<StringQueryOperatorInput>;
  warning?: Maybe<StringQueryOperatorInput>;
  danger?: Maybe<StringQueryOperatorInput>;
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
  textMuted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
  sans?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
  light?: Maybe<IntQueryOperatorInput>;
  normal?: Maybe<IntQueryOperatorInput>;
  display?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultSizesFilterInput = {
  sm?: Maybe<IntQueryOperatorInput>;
  md?: Maybe<IntQueryOperatorInput>;
  lg?: Maybe<IntQueryOperatorInput>;
  xl?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultShadowsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  sm?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultRadiiFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  sm?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
  pill?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultTextFilterInput = {
  heading?: Maybe<SitePluginPluginOptionsPresetDefaultTextHeadingFilterInput>;
  display?: Maybe<SitePluginPluginOptionsPresetDefaultTextDisplayFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultTextHeadingFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultTextDisplayFilterInput = {
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetDefaultStylesRootFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetDefaultStylesAFilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6FilterInput>;
  blockquote?: Maybe<SitePluginPluginOptionsPresetDefaultStylesBlockquoteFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetDefaultStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTdFilterInput>;
  inlineCode?: Maybe<SitePluginPluginOptionsPresetDefaultStylesInlineCodeFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetDefaultStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  textDecoration?: Maybe<StringQueryOperatorInput>;
  _hover?: Maybe<SitePluginPluginOptionsPresetDefaultStylesA_HoverFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesA_HoverFilterInput = {
  textDecoration?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPFilterInput = {
  mb?: Maybe<IntQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesBlockquoteFilterInput = {
  fontSize?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  marginBottom?: Maybe<IntQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesThFilterInput = {
  verticalAlign?: Maybe<StringQueryOperatorInput>;
  borderTopWidth?: Maybe<IntQueryOperatorInput>;
  borderTopStyle?: Maybe<StringQueryOperatorInput>;
  borderTopColor?: Maybe<StringQueryOperatorInput>;
  borderBottomWidth?: Maybe<IntQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
  borderBottomColor?: Maybe<StringQueryOperatorInput>;
  padding?: Maybe<StringQueryOperatorInput>;
  textAlign?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTdFilterInput = {
  borderBottomWidth?: Maybe<IntQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
  borderBottomColor?: Maybe<StringQueryOperatorInput>;
  verticalAlign?: Maybe<StringQueryOperatorInput>;
  padding?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesInlineCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
  light?: Maybe<IntQueryOperatorInput>;
  normal?: Maybe<IntQueryOperatorInput>;
  display?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
  sans?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetRadiiFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  sm?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
  pill?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetShadowsFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  sm?: Maybe<StringQueryOperatorInput>;
  lg?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetSizesFilterInput = {
  sm?: Maybe<IntQueryOperatorInput>;
  md?: Maybe<IntQueryOperatorInput>;
  lg?: Maybe<IntQueryOperatorInput>;
  xl?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetStylesRootFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetStylesAFilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetStylesPFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetStylesH6FilterInput>;
  blockquote?: Maybe<SitePluginPluginOptionsPresetStylesBlockquoteFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetStylesTdFilterInput>;
  inlineCode?: Maybe<SitePluginPluginOptionsPresetStylesInlineCodeFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  textDecoration?: Maybe<StringQueryOperatorInput>;
  _hover?: Maybe<SitePluginPluginOptionsPresetStylesA_HoverFilterInput>;
};

export type SitePluginPluginOptionsPresetStylesA_HoverFilterInput = {
  textDecoration?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesPFilterInput = {
  mb?: Maybe<IntQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesH1FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesH2FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesH3FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesH4FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesH5FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesH6FilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  mt?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesBlockquoteFilterInput = {
  fontSize?: Maybe<IntQueryOperatorInput>;
  mb?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  marginBottom?: Maybe<IntQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesThFilterInput = {
  verticalAlign?: Maybe<StringQueryOperatorInput>;
  borderTopWidth?: Maybe<IntQueryOperatorInput>;
  borderTopStyle?: Maybe<StringQueryOperatorInput>;
  borderTopColor?: Maybe<StringQueryOperatorInput>;
  borderBottomWidth?: Maybe<IntQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
  borderBottomColor?: Maybe<StringQueryOperatorInput>;
  padding?: Maybe<StringQueryOperatorInput>;
  textAlign?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesTdFilterInput = {
  borderBottomWidth?: Maybe<IntQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
  borderBottomColor?: Maybe<StringQueryOperatorInput>;
  verticalAlign?: Maybe<StringQueryOperatorInput>;
  padding?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesInlineCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___sourceMap'
  | 'pluginCreator___pluginOptions___autoLabel'
  | 'pluginCreator___pluginOptions___labelFormat'
  | 'pluginCreator___pluginOptions___cssPropOptimization'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___preset___breakpoints'
  | 'pluginCreator___pluginOptions___preset___fontSizes'
  | 'pluginCreator___pluginOptions___preset___space'
  | 'pluginCreator___pluginOptions___basePath'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___component'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___enableTags'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___sourceMap'
  | 'pluginOptions___autoLabel'
  | 'pluginOptions___labelFormat'
  | 'pluginOptions___cssPropOptimization'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___preset___baseColors___white'
  | 'pluginOptions___preset___baseColors___black'
  | 'pluginOptions___preset___baseColors___gray'
  | 'pluginOptions___preset___baseColors___blue'
  | 'pluginOptions___preset___baseColors___indigo'
  | 'pluginOptions___preset___baseColors___purple'
  | 'pluginOptions___preset___baseColors___pink'
  | 'pluginOptions___preset___baseColors___red'
  | 'pluginOptions___preset___baseColors___orange'
  | 'pluginOptions___preset___baseColors___yellow'
  | 'pluginOptions___preset___baseColors___green'
  | 'pluginOptions___preset___baseColors___teal'
  | 'pluginOptions___preset___baseColors___cyan'
  | 'pluginOptions___preset___bootstrap___breakpoints'
  | 'pluginOptions___preset___bootstrap___space'
  | 'pluginOptions___preset___bootstrap___fontSizes'
  | 'pluginOptions___preset___breakpoints'
  | 'pluginOptions___preset___colors___white'
  | 'pluginOptions___preset___colors___black'
  | 'pluginOptions___preset___colors___gray'
  | 'pluginOptions___preset___colors___blue'
  | 'pluginOptions___preset___colors___indigo'
  | 'pluginOptions___preset___colors___purple'
  | 'pluginOptions___preset___colors___pink'
  | 'pluginOptions___preset___colors___red'
  | 'pluginOptions___preset___colors___orange'
  | 'pluginOptions___preset___colors___yellow'
  | 'pluginOptions___preset___colors___green'
  | 'pluginOptions___preset___colors___teal'
  | 'pluginOptions___preset___colors___cyan'
  | 'pluginOptions___preset___colors___grayDark'
  | 'pluginOptions___preset___colors___text'
  | 'pluginOptions___preset___colors___background'
  | 'pluginOptions___preset___colors___primary'
  | 'pluginOptions___preset___colors___secondary'
  | 'pluginOptions___preset___colors___muted'
  | 'pluginOptions___preset___colors___success'
  | 'pluginOptions___preset___colors___info'
  | 'pluginOptions___preset___colors___warning'
  | 'pluginOptions___preset___colors___danger'
  | 'pluginOptions___preset___colors___light'
  | 'pluginOptions___preset___colors___dark'
  | 'pluginOptions___preset___colors___textMuted'
  | 'pluginOptions___preset___default___breakpoints'
  | 'pluginOptions___preset___default___space'
  | 'pluginOptions___preset___default___fontSizes'
  | 'pluginOptions___preset___fontSizes'
  | 'pluginOptions___preset___fontWeights___body'
  | 'pluginOptions___preset___fontWeights___heading'
  | 'pluginOptions___preset___fontWeights___bold'
  | 'pluginOptions___preset___fontWeights___light'
  | 'pluginOptions___preset___fontWeights___normal'
  | 'pluginOptions___preset___fontWeights___display'
  | 'pluginOptions___preset___fonts___body'
  | 'pluginOptions___preset___fonts___heading'
  | 'pluginOptions___preset___fonts___monospace'
  | 'pluginOptions___preset___fonts___sans'
  | 'pluginOptions___preset___lineHeights___body'
  | 'pluginOptions___preset___lineHeights___heading'
  | 'pluginOptions___preset___radii___default'
  | 'pluginOptions___preset___radii___sm'
  | 'pluginOptions___preset___radii___lg'
  | 'pluginOptions___preset___radii___pill'
  | 'pluginOptions___preset___shadows___default'
  | 'pluginOptions___preset___shadows___sm'
  | 'pluginOptions___preset___shadows___lg'
  | 'pluginOptions___preset___sizes___sm'
  | 'pluginOptions___preset___sizes___md'
  | 'pluginOptions___preset___sizes___lg'
  | 'pluginOptions___preset___sizes___xl'
  | 'pluginOptions___preset___space'
  | 'pluginOptions___basePath'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___component'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___enableTags'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ThemeUiConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionMaxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionMinArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionSumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigEdge = {
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export type ThemeUiConfigFieldsEnum =
  | 'preset'
  | 'prismPreset'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ThemeUiConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ThemeUiConfigGroupConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionMaxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionMinArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionSumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigSortInput = {
  fields?: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'gatsbyImageData'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulHomePageFilterListInput = {
  elemMatch?: Maybe<ContentfulHomePageFilterInput>;
};

export type ContentfulHomePageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  bannerSection?: Maybe<ContentfulBannerFilterListInput>;
  aboutUsSection?: Maybe<ContentfulAboutUsFilterInput>;
  activitiesSection?: Maybe<ContentfulActivitySectionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHomePageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBannerFilterListInput = {
  elemMatch?: Maybe<ContentfulBannerFilterInput>;
};

export type ContentfulBannerFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterListInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBannerSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBannerSysContentTypeFilterInput>;
};

export type ContentfulBannerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBannerSysContentTypeSysFilterInput>;
};

export type ContentfulBannerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutUsFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sectionTitle?: Maybe<StringQueryOperatorInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  aboutUsDescription?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutUsSysFilterInput>;
  childrenContentfulAboutUsAboutUsDescriptionTextNode?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterListInput>;
  childContentfulAboutUsAboutUsDescriptionTextNode?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutUsDescription?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeSysFilterInput>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutUsSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAboutUsSysContentTypeFilterInput>;
};

export type ContentfulAboutUsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAboutUsSysContentTypeSysFilterInput>;
};

export type ContentfulAboutUsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFilterInput>;
};

export type ContentfulActivitySectionFilterListInput = {
  elemMatch?: Maybe<ContentfulActivitySectionFilterInput>;
};

export type ContentfulActivitySectionFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  activitySectionTitle?: Maybe<StringQueryOperatorInput>;
  activity?: Maybe<ContentfulActivityFilterListInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulActivitySectionSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulActivityFilterListInput = {
  elemMatch?: Maybe<ContentfulActivityFilterInput>;
};

export type ContentfulActivityFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  activityCategory?: Maybe<StringQueryOperatorInput>;
  activityImage?: Maybe<ContentfulAssetFilterInput>;
  activity_section?: Maybe<ContentfulActivitySectionFilterListInput>;
  activityDescription?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulActivitySysFilterInput>;
  childrenContentfulActivityActivityDescriptionTextNode?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterListInput>;
  childContentfulActivityActivityDescriptionTextNode?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulActivityActivityDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  activityDescription?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulActivityActivityDescriptionTextNodeSysFilterInput>;
};

export type ContentfulActivityActivityDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulActivitySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulActivitySysContentTypeFilterInput>;
};

export type ContentfulActivitySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulActivitySysContentTypeSysFilterInput>;
};

export type ContentfulActivitySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulActivityActivityDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulActivityActivityDescriptionTextNodeFilterInput>;
};

export type ContentfulActivitySectionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulActivitySectionSysContentTypeFilterInput>;
};

export type ContentfulActivitySectionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulActivitySectionSysContentTypeSysFilterInput>;
};

export type ContentfulActivitySectionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHomePageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHomePageSysContentTypeFilterInput>;
};

export type ContentfulHomePageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHomePageSysContentTypeSysFilterInput>;
};

export type ContentfulHomePageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBannerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerEdge>;
  nodes: Array<ContentfulBanner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBannerGroupConnection>;
};


export type ContentfulBannerConnectionDistinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionMaxArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionMinArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionSumArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBannerFieldsEnum;
};

export type ContentfulBannerEdge = {
  next?: Maybe<ContentfulBanner>;
  node: ContentfulBanner;
  previous?: Maybe<ContentfulBanner>;
};

export type ContentfulBannerFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'image'
  | 'image___contentful_id'
  | 'image___id'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___sys___type'
  | 'image___sys___revision'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___gatsbyImageData'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'home_page'
  | 'home_page___contentful_id'
  | 'home_page___id'
  | 'home_page___node_locale'
  | 'home_page___bannerSection'
  | 'home_page___bannerSection___contentful_id'
  | 'home_page___bannerSection___id'
  | 'home_page___bannerSection___node_locale'
  | 'home_page___bannerSection___title'
  | 'home_page___bannerSection___image'
  | 'home_page___bannerSection___image___contentful_id'
  | 'home_page___bannerSection___image___id'
  | 'home_page___bannerSection___image___spaceId'
  | 'home_page___bannerSection___image___createdAt'
  | 'home_page___bannerSection___image___updatedAt'
  | 'home_page___bannerSection___image___title'
  | 'home_page___bannerSection___image___description'
  | 'home_page___bannerSection___image___node_locale'
  | 'home_page___bannerSection___image___gatsbyImageData'
  | 'home_page___bannerSection___image___children'
  | 'home_page___bannerSection___home_page'
  | 'home_page___bannerSection___home_page___contentful_id'
  | 'home_page___bannerSection___home_page___id'
  | 'home_page___bannerSection___home_page___node_locale'
  | 'home_page___bannerSection___home_page___bannerSection'
  | 'home_page___bannerSection___home_page___activitiesSection'
  | 'home_page___bannerSection___home_page___spaceId'
  | 'home_page___bannerSection___home_page___createdAt'
  | 'home_page___bannerSection___home_page___updatedAt'
  | 'home_page___bannerSection___home_page___children'
  | 'home_page___bannerSection___spaceId'
  | 'home_page___bannerSection___createdAt'
  | 'home_page___bannerSection___updatedAt'
  | 'home_page___bannerSection___sys___type'
  | 'home_page___bannerSection___sys___revision'
  | 'home_page___bannerSection___parent___id'
  | 'home_page___bannerSection___parent___children'
  | 'home_page___bannerSection___children'
  | 'home_page___bannerSection___children___id'
  | 'home_page___bannerSection___children___children'
  | 'home_page___bannerSection___internal___content'
  | 'home_page___bannerSection___internal___contentDigest'
  | 'home_page___bannerSection___internal___description'
  | 'home_page___bannerSection___internal___fieldOwners'
  | 'home_page___bannerSection___internal___ignoreType'
  | 'home_page___bannerSection___internal___mediaType'
  | 'home_page___bannerSection___internal___owner'
  | 'home_page___bannerSection___internal___type'
  | 'home_page___aboutUsSection___contentful_id'
  | 'home_page___aboutUsSection___id'
  | 'home_page___aboutUsSection___node_locale'
  | 'home_page___aboutUsSection___sectionTitle'
  | 'home_page___aboutUsSection___home_page'
  | 'home_page___aboutUsSection___home_page___contentful_id'
  | 'home_page___aboutUsSection___home_page___id'
  | 'home_page___aboutUsSection___home_page___node_locale'
  | 'home_page___aboutUsSection___home_page___bannerSection'
  | 'home_page___aboutUsSection___home_page___activitiesSection'
  | 'home_page___aboutUsSection___home_page___spaceId'
  | 'home_page___aboutUsSection___home_page___createdAt'
  | 'home_page___aboutUsSection___home_page___updatedAt'
  | 'home_page___aboutUsSection___home_page___children'
  | 'home_page___aboutUsSection___aboutUsDescription___id'
  | 'home_page___aboutUsSection___aboutUsDescription___children'
  | 'home_page___aboutUsSection___aboutUsDescription___aboutUsDescription'
  | 'home_page___aboutUsSection___spaceId'
  | 'home_page___aboutUsSection___createdAt'
  | 'home_page___aboutUsSection___updatedAt'
  | 'home_page___aboutUsSection___sys___type'
  | 'home_page___aboutUsSection___sys___revision'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'home_page___aboutUsSection___parent___id'
  | 'home_page___aboutUsSection___parent___children'
  | 'home_page___aboutUsSection___children'
  | 'home_page___aboutUsSection___children___id'
  | 'home_page___aboutUsSection___children___children'
  | 'home_page___aboutUsSection___internal___content'
  | 'home_page___aboutUsSection___internal___contentDigest'
  | 'home_page___aboutUsSection___internal___description'
  | 'home_page___aboutUsSection___internal___fieldOwners'
  | 'home_page___aboutUsSection___internal___ignoreType'
  | 'home_page___aboutUsSection___internal___mediaType'
  | 'home_page___aboutUsSection___internal___owner'
  | 'home_page___aboutUsSection___internal___type'
  | 'home_page___activitiesSection'
  | 'home_page___activitiesSection___contentful_id'
  | 'home_page___activitiesSection___id'
  | 'home_page___activitiesSection___node_locale'
  | 'home_page___activitiesSection___activitySectionTitle'
  | 'home_page___activitiesSection___activity'
  | 'home_page___activitiesSection___activity___contentful_id'
  | 'home_page___activitiesSection___activity___id'
  | 'home_page___activitiesSection___activity___node_locale'
  | 'home_page___activitiesSection___activity___activityCategory'
  | 'home_page___activitiesSection___activity___activity_section'
  | 'home_page___activitiesSection___activity___spaceId'
  | 'home_page___activitiesSection___activity___createdAt'
  | 'home_page___activitiesSection___activity___updatedAt'
  | 'home_page___activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'home_page___activitiesSection___activity___children'
  | 'home_page___activitiesSection___home_page'
  | 'home_page___activitiesSection___home_page___contentful_id'
  | 'home_page___activitiesSection___home_page___id'
  | 'home_page___activitiesSection___home_page___node_locale'
  | 'home_page___activitiesSection___home_page___bannerSection'
  | 'home_page___activitiesSection___home_page___activitiesSection'
  | 'home_page___activitiesSection___home_page___spaceId'
  | 'home_page___activitiesSection___home_page___createdAt'
  | 'home_page___activitiesSection___home_page___updatedAt'
  | 'home_page___activitiesSection___home_page___children'
  | 'home_page___activitiesSection___spaceId'
  | 'home_page___activitiesSection___createdAt'
  | 'home_page___activitiesSection___updatedAt'
  | 'home_page___activitiesSection___sys___type'
  | 'home_page___activitiesSection___sys___revision'
  | 'home_page___activitiesSection___parent___id'
  | 'home_page___activitiesSection___parent___children'
  | 'home_page___activitiesSection___children'
  | 'home_page___activitiesSection___children___id'
  | 'home_page___activitiesSection___children___children'
  | 'home_page___activitiesSection___internal___content'
  | 'home_page___activitiesSection___internal___contentDigest'
  | 'home_page___activitiesSection___internal___description'
  | 'home_page___activitiesSection___internal___fieldOwners'
  | 'home_page___activitiesSection___internal___ignoreType'
  | 'home_page___activitiesSection___internal___mediaType'
  | 'home_page___activitiesSection___internal___owner'
  | 'home_page___activitiesSection___internal___type'
  | 'home_page___spaceId'
  | 'home_page___createdAt'
  | 'home_page___updatedAt'
  | 'home_page___sys___type'
  | 'home_page___sys___revision'
  | 'home_page___parent___id'
  | 'home_page___parent___parent___id'
  | 'home_page___parent___parent___children'
  | 'home_page___parent___children'
  | 'home_page___parent___children___id'
  | 'home_page___parent___children___children'
  | 'home_page___parent___internal___content'
  | 'home_page___parent___internal___contentDigest'
  | 'home_page___parent___internal___description'
  | 'home_page___parent___internal___fieldOwners'
  | 'home_page___parent___internal___ignoreType'
  | 'home_page___parent___internal___mediaType'
  | 'home_page___parent___internal___owner'
  | 'home_page___parent___internal___type'
  | 'home_page___children'
  | 'home_page___children___id'
  | 'home_page___children___parent___id'
  | 'home_page___children___parent___children'
  | 'home_page___children___children'
  | 'home_page___children___children___id'
  | 'home_page___children___children___children'
  | 'home_page___children___internal___content'
  | 'home_page___children___internal___contentDigest'
  | 'home_page___children___internal___description'
  | 'home_page___children___internal___fieldOwners'
  | 'home_page___children___internal___ignoreType'
  | 'home_page___children___internal___mediaType'
  | 'home_page___children___internal___owner'
  | 'home_page___children___internal___type'
  | 'home_page___internal___content'
  | 'home_page___internal___contentDigest'
  | 'home_page___internal___description'
  | 'home_page___internal___fieldOwners'
  | 'home_page___internal___ignoreType'
  | 'home_page___internal___mediaType'
  | 'home_page___internal___owner'
  | 'home_page___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulBannerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerEdge>;
  nodes: Array<ContentfulBanner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulBannerGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulBannerGroupConnectionDistinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionMaxArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionMinArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionSumArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBannerFieldsEnum;
};

export type ContentfulBannerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBannerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutUsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutUsEdge>;
  nodes: Array<ContentfulAboutUs>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAboutUsGroupConnection>;
};


export type ContentfulAboutUsConnectionDistinctArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsConnectionMaxArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsConnectionMinArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsConnectionSumArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutUsFieldsEnum;
};

export type ContentfulAboutUsEdge = {
  next?: Maybe<ContentfulAboutUs>;
  node: ContentfulAboutUs;
  previous?: Maybe<ContentfulAboutUs>;
};

export type ContentfulAboutUsFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'sectionTitle'
  | 'home_page'
  | 'home_page___contentful_id'
  | 'home_page___id'
  | 'home_page___node_locale'
  | 'home_page___bannerSection'
  | 'home_page___bannerSection___contentful_id'
  | 'home_page___bannerSection___id'
  | 'home_page___bannerSection___node_locale'
  | 'home_page___bannerSection___title'
  | 'home_page___bannerSection___image'
  | 'home_page___bannerSection___image___contentful_id'
  | 'home_page___bannerSection___image___id'
  | 'home_page___bannerSection___image___spaceId'
  | 'home_page___bannerSection___image___createdAt'
  | 'home_page___bannerSection___image___updatedAt'
  | 'home_page___bannerSection___image___title'
  | 'home_page___bannerSection___image___description'
  | 'home_page___bannerSection___image___node_locale'
  | 'home_page___bannerSection___image___gatsbyImageData'
  | 'home_page___bannerSection___image___children'
  | 'home_page___bannerSection___home_page'
  | 'home_page___bannerSection___home_page___contentful_id'
  | 'home_page___bannerSection___home_page___id'
  | 'home_page___bannerSection___home_page___node_locale'
  | 'home_page___bannerSection___home_page___bannerSection'
  | 'home_page___bannerSection___home_page___activitiesSection'
  | 'home_page___bannerSection___home_page___spaceId'
  | 'home_page___bannerSection___home_page___createdAt'
  | 'home_page___bannerSection___home_page___updatedAt'
  | 'home_page___bannerSection___home_page___children'
  | 'home_page___bannerSection___spaceId'
  | 'home_page___bannerSection___createdAt'
  | 'home_page___bannerSection___updatedAt'
  | 'home_page___bannerSection___sys___type'
  | 'home_page___bannerSection___sys___revision'
  | 'home_page___bannerSection___parent___id'
  | 'home_page___bannerSection___parent___children'
  | 'home_page___bannerSection___children'
  | 'home_page___bannerSection___children___id'
  | 'home_page___bannerSection___children___children'
  | 'home_page___bannerSection___internal___content'
  | 'home_page___bannerSection___internal___contentDigest'
  | 'home_page___bannerSection___internal___description'
  | 'home_page___bannerSection___internal___fieldOwners'
  | 'home_page___bannerSection___internal___ignoreType'
  | 'home_page___bannerSection___internal___mediaType'
  | 'home_page___bannerSection___internal___owner'
  | 'home_page___bannerSection___internal___type'
  | 'home_page___aboutUsSection___contentful_id'
  | 'home_page___aboutUsSection___id'
  | 'home_page___aboutUsSection___node_locale'
  | 'home_page___aboutUsSection___sectionTitle'
  | 'home_page___aboutUsSection___home_page'
  | 'home_page___aboutUsSection___home_page___contentful_id'
  | 'home_page___aboutUsSection___home_page___id'
  | 'home_page___aboutUsSection___home_page___node_locale'
  | 'home_page___aboutUsSection___home_page___bannerSection'
  | 'home_page___aboutUsSection___home_page___activitiesSection'
  | 'home_page___aboutUsSection___home_page___spaceId'
  | 'home_page___aboutUsSection___home_page___createdAt'
  | 'home_page___aboutUsSection___home_page___updatedAt'
  | 'home_page___aboutUsSection___home_page___children'
  | 'home_page___aboutUsSection___aboutUsDescription___id'
  | 'home_page___aboutUsSection___aboutUsDescription___children'
  | 'home_page___aboutUsSection___aboutUsDescription___aboutUsDescription'
  | 'home_page___aboutUsSection___spaceId'
  | 'home_page___aboutUsSection___createdAt'
  | 'home_page___aboutUsSection___updatedAt'
  | 'home_page___aboutUsSection___sys___type'
  | 'home_page___aboutUsSection___sys___revision'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'home_page___aboutUsSection___parent___id'
  | 'home_page___aboutUsSection___parent___children'
  | 'home_page___aboutUsSection___children'
  | 'home_page___aboutUsSection___children___id'
  | 'home_page___aboutUsSection___children___children'
  | 'home_page___aboutUsSection___internal___content'
  | 'home_page___aboutUsSection___internal___contentDigest'
  | 'home_page___aboutUsSection___internal___description'
  | 'home_page___aboutUsSection___internal___fieldOwners'
  | 'home_page___aboutUsSection___internal___ignoreType'
  | 'home_page___aboutUsSection___internal___mediaType'
  | 'home_page___aboutUsSection___internal___owner'
  | 'home_page___aboutUsSection___internal___type'
  | 'home_page___activitiesSection'
  | 'home_page___activitiesSection___contentful_id'
  | 'home_page___activitiesSection___id'
  | 'home_page___activitiesSection___node_locale'
  | 'home_page___activitiesSection___activitySectionTitle'
  | 'home_page___activitiesSection___activity'
  | 'home_page___activitiesSection___activity___contentful_id'
  | 'home_page___activitiesSection___activity___id'
  | 'home_page___activitiesSection___activity___node_locale'
  | 'home_page___activitiesSection___activity___activityCategory'
  | 'home_page___activitiesSection___activity___activity_section'
  | 'home_page___activitiesSection___activity___spaceId'
  | 'home_page___activitiesSection___activity___createdAt'
  | 'home_page___activitiesSection___activity___updatedAt'
  | 'home_page___activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'home_page___activitiesSection___activity___children'
  | 'home_page___activitiesSection___home_page'
  | 'home_page___activitiesSection___home_page___contentful_id'
  | 'home_page___activitiesSection___home_page___id'
  | 'home_page___activitiesSection___home_page___node_locale'
  | 'home_page___activitiesSection___home_page___bannerSection'
  | 'home_page___activitiesSection___home_page___activitiesSection'
  | 'home_page___activitiesSection___home_page___spaceId'
  | 'home_page___activitiesSection___home_page___createdAt'
  | 'home_page___activitiesSection___home_page___updatedAt'
  | 'home_page___activitiesSection___home_page___children'
  | 'home_page___activitiesSection___spaceId'
  | 'home_page___activitiesSection___createdAt'
  | 'home_page___activitiesSection___updatedAt'
  | 'home_page___activitiesSection___sys___type'
  | 'home_page___activitiesSection___sys___revision'
  | 'home_page___activitiesSection___parent___id'
  | 'home_page___activitiesSection___parent___children'
  | 'home_page___activitiesSection___children'
  | 'home_page___activitiesSection___children___id'
  | 'home_page___activitiesSection___children___children'
  | 'home_page___activitiesSection___internal___content'
  | 'home_page___activitiesSection___internal___contentDigest'
  | 'home_page___activitiesSection___internal___description'
  | 'home_page___activitiesSection___internal___fieldOwners'
  | 'home_page___activitiesSection___internal___ignoreType'
  | 'home_page___activitiesSection___internal___mediaType'
  | 'home_page___activitiesSection___internal___owner'
  | 'home_page___activitiesSection___internal___type'
  | 'home_page___spaceId'
  | 'home_page___createdAt'
  | 'home_page___updatedAt'
  | 'home_page___sys___type'
  | 'home_page___sys___revision'
  | 'home_page___parent___id'
  | 'home_page___parent___parent___id'
  | 'home_page___parent___parent___children'
  | 'home_page___parent___children'
  | 'home_page___parent___children___id'
  | 'home_page___parent___children___children'
  | 'home_page___parent___internal___content'
  | 'home_page___parent___internal___contentDigest'
  | 'home_page___parent___internal___description'
  | 'home_page___parent___internal___fieldOwners'
  | 'home_page___parent___internal___ignoreType'
  | 'home_page___parent___internal___mediaType'
  | 'home_page___parent___internal___owner'
  | 'home_page___parent___internal___type'
  | 'home_page___children'
  | 'home_page___children___id'
  | 'home_page___children___parent___id'
  | 'home_page___children___parent___children'
  | 'home_page___children___children'
  | 'home_page___children___children___id'
  | 'home_page___children___children___children'
  | 'home_page___children___internal___content'
  | 'home_page___children___internal___contentDigest'
  | 'home_page___children___internal___description'
  | 'home_page___children___internal___fieldOwners'
  | 'home_page___children___internal___ignoreType'
  | 'home_page___children___internal___mediaType'
  | 'home_page___children___internal___owner'
  | 'home_page___children___internal___type'
  | 'home_page___internal___content'
  | 'home_page___internal___contentDigest'
  | 'home_page___internal___description'
  | 'home_page___internal___fieldOwners'
  | 'home_page___internal___ignoreType'
  | 'home_page___internal___mediaType'
  | 'home_page___internal___owner'
  | 'home_page___internal___type'
  | 'aboutUsDescription___id'
  | 'aboutUsDescription___parent___id'
  | 'aboutUsDescription___parent___parent___id'
  | 'aboutUsDescription___parent___parent___children'
  | 'aboutUsDescription___parent___children'
  | 'aboutUsDescription___parent___children___id'
  | 'aboutUsDescription___parent___children___children'
  | 'aboutUsDescription___parent___internal___content'
  | 'aboutUsDescription___parent___internal___contentDigest'
  | 'aboutUsDescription___parent___internal___description'
  | 'aboutUsDescription___parent___internal___fieldOwners'
  | 'aboutUsDescription___parent___internal___ignoreType'
  | 'aboutUsDescription___parent___internal___mediaType'
  | 'aboutUsDescription___parent___internal___owner'
  | 'aboutUsDescription___parent___internal___type'
  | 'aboutUsDescription___children'
  | 'aboutUsDescription___children___id'
  | 'aboutUsDescription___children___parent___id'
  | 'aboutUsDescription___children___parent___children'
  | 'aboutUsDescription___children___children'
  | 'aboutUsDescription___children___children___id'
  | 'aboutUsDescription___children___children___children'
  | 'aboutUsDescription___children___internal___content'
  | 'aboutUsDescription___children___internal___contentDigest'
  | 'aboutUsDescription___children___internal___description'
  | 'aboutUsDescription___children___internal___fieldOwners'
  | 'aboutUsDescription___children___internal___ignoreType'
  | 'aboutUsDescription___children___internal___mediaType'
  | 'aboutUsDescription___children___internal___owner'
  | 'aboutUsDescription___children___internal___type'
  | 'aboutUsDescription___internal___content'
  | 'aboutUsDescription___internal___contentDigest'
  | 'aboutUsDescription___internal___description'
  | 'aboutUsDescription___internal___fieldOwners'
  | 'aboutUsDescription___internal___ignoreType'
  | 'aboutUsDescription___internal___mediaType'
  | 'aboutUsDescription___internal___owner'
  | 'aboutUsDescription___internal___type'
  | 'aboutUsDescription___aboutUsDescription'
  | 'aboutUsDescription___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___children___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___children___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___parent___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___parent___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___children___id'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___children___children'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___content'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___description'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___children___internal___type'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___content'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___description'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___owner'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___type'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'childrenContentfulAboutUsAboutUsDescriptionTextNode___sys___type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___parent___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___parent___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___children___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___children___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___content'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___description'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___owner'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___parent___internal___type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___parent___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___parent___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___children___id'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___children___children'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___content'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___description'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___owner'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___children___internal___type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___content'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___contentDigest'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___description'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___ignoreType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___mediaType'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___owner'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___internal___type'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'childContentfulAboutUsAboutUsDescriptionTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAboutUsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutUsEdge>;
  nodes: Array<ContentfulAboutUs>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAboutUsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAboutUsGroupConnectionDistinctArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsGroupConnectionMaxArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsGroupConnectionMinArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsGroupConnectionSumArgs = {
  field: ContentfulAboutUsFieldsEnum;
};


export type ContentfulAboutUsGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutUsFieldsEnum;
};

export type ContentfulAboutUsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutUsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulActivityConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulActivityEdge>;
  nodes: Array<ContentfulActivity>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulActivityGroupConnection>;
};


export type ContentfulActivityConnectionDistinctArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionMaxArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionMinArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionSumArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulActivityFieldsEnum;
};

export type ContentfulActivityEdge = {
  next?: Maybe<ContentfulActivity>;
  node: ContentfulActivity;
  previous?: Maybe<ContentfulActivity>;
};

export type ContentfulActivityFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'activityCategory'
  | 'activityImage___contentful_id'
  | 'activityImage___id'
  | 'activityImage___spaceId'
  | 'activityImage___createdAt'
  | 'activityImage___updatedAt'
  | 'activityImage___file___url'
  | 'activityImage___file___details___size'
  | 'activityImage___file___fileName'
  | 'activityImage___file___contentType'
  | 'activityImage___title'
  | 'activityImage___description'
  | 'activityImage___node_locale'
  | 'activityImage___sys___type'
  | 'activityImage___sys___revision'
  | 'activityImage___fixed___base64'
  | 'activityImage___fixed___tracedSVG'
  | 'activityImage___fixed___aspectRatio'
  | 'activityImage___fixed___width'
  | 'activityImage___fixed___height'
  | 'activityImage___fixed___src'
  | 'activityImage___fixed___srcSet'
  | 'activityImage___fixed___srcWebp'
  | 'activityImage___fixed___srcSetWebp'
  | 'activityImage___fluid___base64'
  | 'activityImage___fluid___tracedSVG'
  | 'activityImage___fluid___aspectRatio'
  | 'activityImage___fluid___src'
  | 'activityImage___fluid___srcSet'
  | 'activityImage___fluid___srcWebp'
  | 'activityImage___fluid___srcSetWebp'
  | 'activityImage___fluid___sizes'
  | 'activityImage___gatsbyImageData'
  | 'activityImage___resize___base64'
  | 'activityImage___resize___tracedSVG'
  | 'activityImage___resize___src'
  | 'activityImage___resize___width'
  | 'activityImage___resize___height'
  | 'activityImage___resize___aspectRatio'
  | 'activityImage___parent___id'
  | 'activityImage___parent___parent___id'
  | 'activityImage___parent___parent___children'
  | 'activityImage___parent___children'
  | 'activityImage___parent___children___id'
  | 'activityImage___parent___children___children'
  | 'activityImage___parent___internal___content'
  | 'activityImage___parent___internal___contentDigest'
  | 'activityImage___parent___internal___description'
  | 'activityImage___parent___internal___fieldOwners'
  | 'activityImage___parent___internal___ignoreType'
  | 'activityImage___parent___internal___mediaType'
  | 'activityImage___parent___internal___owner'
  | 'activityImage___parent___internal___type'
  | 'activityImage___children'
  | 'activityImage___children___id'
  | 'activityImage___children___parent___id'
  | 'activityImage___children___parent___children'
  | 'activityImage___children___children'
  | 'activityImage___children___children___id'
  | 'activityImage___children___children___children'
  | 'activityImage___children___internal___content'
  | 'activityImage___children___internal___contentDigest'
  | 'activityImage___children___internal___description'
  | 'activityImage___children___internal___fieldOwners'
  | 'activityImage___children___internal___ignoreType'
  | 'activityImage___children___internal___mediaType'
  | 'activityImage___children___internal___owner'
  | 'activityImage___children___internal___type'
  | 'activityImage___internal___content'
  | 'activityImage___internal___contentDigest'
  | 'activityImage___internal___description'
  | 'activityImage___internal___fieldOwners'
  | 'activityImage___internal___ignoreType'
  | 'activityImage___internal___mediaType'
  | 'activityImage___internal___owner'
  | 'activityImage___internal___type'
  | 'activity_section'
  | 'activity_section___contentful_id'
  | 'activity_section___id'
  | 'activity_section___node_locale'
  | 'activity_section___activitySectionTitle'
  | 'activity_section___activity'
  | 'activity_section___activity___contentful_id'
  | 'activity_section___activity___id'
  | 'activity_section___activity___node_locale'
  | 'activity_section___activity___activityCategory'
  | 'activity_section___activity___activityImage___contentful_id'
  | 'activity_section___activity___activityImage___id'
  | 'activity_section___activity___activityImage___spaceId'
  | 'activity_section___activity___activityImage___createdAt'
  | 'activity_section___activity___activityImage___updatedAt'
  | 'activity_section___activity___activityImage___title'
  | 'activity_section___activity___activityImage___description'
  | 'activity_section___activity___activityImage___node_locale'
  | 'activity_section___activity___activityImage___gatsbyImageData'
  | 'activity_section___activity___activityImage___children'
  | 'activity_section___activity___activity_section'
  | 'activity_section___activity___activity_section___contentful_id'
  | 'activity_section___activity___activity_section___id'
  | 'activity_section___activity___activity_section___node_locale'
  | 'activity_section___activity___activity_section___activitySectionTitle'
  | 'activity_section___activity___activity_section___activity'
  | 'activity_section___activity___activity_section___home_page'
  | 'activity_section___activity___activity_section___spaceId'
  | 'activity_section___activity___activity_section___createdAt'
  | 'activity_section___activity___activity_section___updatedAt'
  | 'activity_section___activity___activity_section___children'
  | 'activity_section___activity___activityDescription___id'
  | 'activity_section___activity___activityDescription___children'
  | 'activity_section___activity___activityDescription___activityDescription'
  | 'activity_section___activity___spaceId'
  | 'activity_section___activity___createdAt'
  | 'activity_section___activity___updatedAt'
  | 'activity_section___activity___sys___type'
  | 'activity_section___activity___sys___revision'
  | 'activity_section___activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'activity_section___activity___childrenContentfulActivityActivityDescriptionTextNode___id'
  | 'activity_section___activity___childrenContentfulActivityActivityDescriptionTextNode___children'
  | 'activity_section___activity___childrenContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'activity_section___activity___childContentfulActivityActivityDescriptionTextNode___id'
  | 'activity_section___activity___childContentfulActivityActivityDescriptionTextNode___children'
  | 'activity_section___activity___childContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'activity_section___activity___parent___id'
  | 'activity_section___activity___parent___children'
  | 'activity_section___activity___children'
  | 'activity_section___activity___children___id'
  | 'activity_section___activity___children___children'
  | 'activity_section___activity___internal___content'
  | 'activity_section___activity___internal___contentDigest'
  | 'activity_section___activity___internal___description'
  | 'activity_section___activity___internal___fieldOwners'
  | 'activity_section___activity___internal___ignoreType'
  | 'activity_section___activity___internal___mediaType'
  | 'activity_section___activity___internal___owner'
  | 'activity_section___activity___internal___type'
  | 'activity_section___home_page'
  | 'activity_section___home_page___contentful_id'
  | 'activity_section___home_page___id'
  | 'activity_section___home_page___node_locale'
  | 'activity_section___home_page___bannerSection'
  | 'activity_section___home_page___bannerSection___contentful_id'
  | 'activity_section___home_page___bannerSection___id'
  | 'activity_section___home_page___bannerSection___node_locale'
  | 'activity_section___home_page___bannerSection___title'
  | 'activity_section___home_page___bannerSection___image'
  | 'activity_section___home_page___bannerSection___home_page'
  | 'activity_section___home_page___bannerSection___spaceId'
  | 'activity_section___home_page___bannerSection___createdAt'
  | 'activity_section___home_page___bannerSection___updatedAt'
  | 'activity_section___home_page___bannerSection___children'
  | 'activity_section___home_page___aboutUsSection___contentful_id'
  | 'activity_section___home_page___aboutUsSection___id'
  | 'activity_section___home_page___aboutUsSection___node_locale'
  | 'activity_section___home_page___aboutUsSection___sectionTitle'
  | 'activity_section___home_page___aboutUsSection___home_page'
  | 'activity_section___home_page___aboutUsSection___spaceId'
  | 'activity_section___home_page___aboutUsSection___createdAt'
  | 'activity_section___home_page___aboutUsSection___updatedAt'
  | 'activity_section___home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'activity_section___home_page___aboutUsSection___children'
  | 'activity_section___home_page___activitiesSection'
  | 'activity_section___home_page___activitiesSection___contentful_id'
  | 'activity_section___home_page___activitiesSection___id'
  | 'activity_section___home_page___activitiesSection___node_locale'
  | 'activity_section___home_page___activitiesSection___activitySectionTitle'
  | 'activity_section___home_page___activitiesSection___activity'
  | 'activity_section___home_page___activitiesSection___home_page'
  | 'activity_section___home_page___activitiesSection___spaceId'
  | 'activity_section___home_page___activitiesSection___createdAt'
  | 'activity_section___home_page___activitiesSection___updatedAt'
  | 'activity_section___home_page___activitiesSection___children'
  | 'activity_section___home_page___spaceId'
  | 'activity_section___home_page___createdAt'
  | 'activity_section___home_page___updatedAt'
  | 'activity_section___home_page___sys___type'
  | 'activity_section___home_page___sys___revision'
  | 'activity_section___home_page___parent___id'
  | 'activity_section___home_page___parent___children'
  | 'activity_section___home_page___children'
  | 'activity_section___home_page___children___id'
  | 'activity_section___home_page___children___children'
  | 'activity_section___home_page___internal___content'
  | 'activity_section___home_page___internal___contentDigest'
  | 'activity_section___home_page___internal___description'
  | 'activity_section___home_page___internal___fieldOwners'
  | 'activity_section___home_page___internal___ignoreType'
  | 'activity_section___home_page___internal___mediaType'
  | 'activity_section___home_page___internal___owner'
  | 'activity_section___home_page___internal___type'
  | 'activity_section___spaceId'
  | 'activity_section___createdAt'
  | 'activity_section___updatedAt'
  | 'activity_section___sys___type'
  | 'activity_section___sys___revision'
  | 'activity_section___parent___id'
  | 'activity_section___parent___parent___id'
  | 'activity_section___parent___parent___children'
  | 'activity_section___parent___children'
  | 'activity_section___parent___children___id'
  | 'activity_section___parent___children___children'
  | 'activity_section___parent___internal___content'
  | 'activity_section___parent___internal___contentDigest'
  | 'activity_section___parent___internal___description'
  | 'activity_section___parent___internal___fieldOwners'
  | 'activity_section___parent___internal___ignoreType'
  | 'activity_section___parent___internal___mediaType'
  | 'activity_section___parent___internal___owner'
  | 'activity_section___parent___internal___type'
  | 'activity_section___children'
  | 'activity_section___children___id'
  | 'activity_section___children___parent___id'
  | 'activity_section___children___parent___children'
  | 'activity_section___children___children'
  | 'activity_section___children___children___id'
  | 'activity_section___children___children___children'
  | 'activity_section___children___internal___content'
  | 'activity_section___children___internal___contentDigest'
  | 'activity_section___children___internal___description'
  | 'activity_section___children___internal___fieldOwners'
  | 'activity_section___children___internal___ignoreType'
  | 'activity_section___children___internal___mediaType'
  | 'activity_section___children___internal___owner'
  | 'activity_section___children___internal___type'
  | 'activity_section___internal___content'
  | 'activity_section___internal___contentDigest'
  | 'activity_section___internal___description'
  | 'activity_section___internal___fieldOwners'
  | 'activity_section___internal___ignoreType'
  | 'activity_section___internal___mediaType'
  | 'activity_section___internal___owner'
  | 'activity_section___internal___type'
  | 'activityDescription___id'
  | 'activityDescription___parent___id'
  | 'activityDescription___parent___parent___id'
  | 'activityDescription___parent___parent___children'
  | 'activityDescription___parent___children'
  | 'activityDescription___parent___children___id'
  | 'activityDescription___parent___children___children'
  | 'activityDescription___parent___internal___content'
  | 'activityDescription___parent___internal___contentDigest'
  | 'activityDescription___parent___internal___description'
  | 'activityDescription___parent___internal___fieldOwners'
  | 'activityDescription___parent___internal___ignoreType'
  | 'activityDescription___parent___internal___mediaType'
  | 'activityDescription___parent___internal___owner'
  | 'activityDescription___parent___internal___type'
  | 'activityDescription___children'
  | 'activityDescription___children___id'
  | 'activityDescription___children___parent___id'
  | 'activityDescription___children___parent___children'
  | 'activityDescription___children___children'
  | 'activityDescription___children___children___id'
  | 'activityDescription___children___children___children'
  | 'activityDescription___children___internal___content'
  | 'activityDescription___children___internal___contentDigest'
  | 'activityDescription___children___internal___description'
  | 'activityDescription___children___internal___fieldOwners'
  | 'activityDescription___children___internal___ignoreType'
  | 'activityDescription___children___internal___mediaType'
  | 'activityDescription___children___internal___owner'
  | 'activityDescription___children___internal___type'
  | 'activityDescription___internal___content'
  | 'activityDescription___internal___contentDigest'
  | 'activityDescription___internal___description'
  | 'activityDescription___internal___fieldOwners'
  | 'activityDescription___internal___ignoreType'
  | 'activityDescription___internal___mediaType'
  | 'activityDescription___internal___owner'
  | 'activityDescription___internal___type'
  | 'activityDescription___activityDescription'
  | 'activityDescription___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode'
  | 'childrenContentfulActivityActivityDescriptionTextNode___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___children___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___children___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulActivityActivityDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___parent___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___parent___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___children___id'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___children___children'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___content'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___description'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulActivityActivityDescriptionTextNode___children___internal___type'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___content'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___description'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___owner'
  | 'childrenContentfulActivityActivityDescriptionTextNode___internal___type'
  | 'childrenContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'childrenContentfulActivityActivityDescriptionTextNode___sys___type'
  | 'childContentfulActivityActivityDescriptionTextNode___id'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___id'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___parent___id'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___parent___children'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___children'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___children___id'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___children___children'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___content'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___description'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___owner'
  | 'childContentfulActivityActivityDescriptionTextNode___parent___internal___type'
  | 'childContentfulActivityActivityDescriptionTextNode___children'
  | 'childContentfulActivityActivityDescriptionTextNode___children___id'
  | 'childContentfulActivityActivityDescriptionTextNode___children___parent___id'
  | 'childContentfulActivityActivityDescriptionTextNode___children___parent___children'
  | 'childContentfulActivityActivityDescriptionTextNode___children___children'
  | 'childContentfulActivityActivityDescriptionTextNode___children___children___id'
  | 'childContentfulActivityActivityDescriptionTextNode___children___children___children'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___content'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___description'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___owner'
  | 'childContentfulActivityActivityDescriptionTextNode___children___internal___type'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___content'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___contentDigest'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___description'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___ignoreType'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___mediaType'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___owner'
  | 'childContentfulActivityActivityDescriptionTextNode___internal___type'
  | 'childContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'childContentfulActivityActivityDescriptionTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulActivityGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulActivityEdge>;
  nodes: Array<ContentfulActivity>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulActivityGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulActivityGroupConnectionDistinctArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionMaxArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionMinArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionSumArgs = {
  field: ContentfulActivityFieldsEnum;
};


export type ContentfulActivityGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulActivityFieldsEnum;
};

export type ContentfulActivitySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulActivityFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHomePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHomePageEdge>;
  nodes: Array<ContentfulHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHomePageGroupConnection>;
};


export type ContentfulHomePageConnectionDistinctArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageConnectionMaxArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageConnectionMinArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageConnectionSumArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHomePageFieldsEnum;
};

export type ContentfulHomePageEdge = {
  next?: Maybe<ContentfulHomePage>;
  node: ContentfulHomePage;
  previous?: Maybe<ContentfulHomePage>;
};

export type ContentfulHomePageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'bannerSection'
  | 'bannerSection___contentful_id'
  | 'bannerSection___id'
  | 'bannerSection___node_locale'
  | 'bannerSection___title'
  | 'bannerSection___image'
  | 'bannerSection___image___contentful_id'
  | 'bannerSection___image___id'
  | 'bannerSection___image___spaceId'
  | 'bannerSection___image___createdAt'
  | 'bannerSection___image___updatedAt'
  | 'bannerSection___image___file___url'
  | 'bannerSection___image___file___fileName'
  | 'bannerSection___image___file___contentType'
  | 'bannerSection___image___title'
  | 'bannerSection___image___description'
  | 'bannerSection___image___node_locale'
  | 'bannerSection___image___sys___type'
  | 'bannerSection___image___sys___revision'
  | 'bannerSection___image___fixed___base64'
  | 'bannerSection___image___fixed___tracedSVG'
  | 'bannerSection___image___fixed___aspectRatio'
  | 'bannerSection___image___fixed___width'
  | 'bannerSection___image___fixed___height'
  | 'bannerSection___image___fixed___src'
  | 'bannerSection___image___fixed___srcSet'
  | 'bannerSection___image___fixed___srcWebp'
  | 'bannerSection___image___fixed___srcSetWebp'
  | 'bannerSection___image___fluid___base64'
  | 'bannerSection___image___fluid___tracedSVG'
  | 'bannerSection___image___fluid___aspectRatio'
  | 'bannerSection___image___fluid___src'
  | 'bannerSection___image___fluid___srcSet'
  | 'bannerSection___image___fluid___srcWebp'
  | 'bannerSection___image___fluid___srcSetWebp'
  | 'bannerSection___image___fluid___sizes'
  | 'bannerSection___image___gatsbyImageData'
  | 'bannerSection___image___resize___base64'
  | 'bannerSection___image___resize___tracedSVG'
  | 'bannerSection___image___resize___src'
  | 'bannerSection___image___resize___width'
  | 'bannerSection___image___resize___height'
  | 'bannerSection___image___resize___aspectRatio'
  | 'bannerSection___image___parent___id'
  | 'bannerSection___image___parent___children'
  | 'bannerSection___image___children'
  | 'bannerSection___image___children___id'
  | 'bannerSection___image___children___children'
  | 'bannerSection___image___internal___content'
  | 'bannerSection___image___internal___contentDigest'
  | 'bannerSection___image___internal___description'
  | 'bannerSection___image___internal___fieldOwners'
  | 'bannerSection___image___internal___ignoreType'
  | 'bannerSection___image___internal___mediaType'
  | 'bannerSection___image___internal___owner'
  | 'bannerSection___image___internal___type'
  | 'bannerSection___home_page'
  | 'bannerSection___home_page___contentful_id'
  | 'bannerSection___home_page___id'
  | 'bannerSection___home_page___node_locale'
  | 'bannerSection___home_page___bannerSection'
  | 'bannerSection___home_page___bannerSection___contentful_id'
  | 'bannerSection___home_page___bannerSection___id'
  | 'bannerSection___home_page___bannerSection___node_locale'
  | 'bannerSection___home_page___bannerSection___title'
  | 'bannerSection___home_page___bannerSection___image'
  | 'bannerSection___home_page___bannerSection___home_page'
  | 'bannerSection___home_page___bannerSection___spaceId'
  | 'bannerSection___home_page___bannerSection___createdAt'
  | 'bannerSection___home_page___bannerSection___updatedAt'
  | 'bannerSection___home_page___bannerSection___children'
  | 'bannerSection___home_page___aboutUsSection___contentful_id'
  | 'bannerSection___home_page___aboutUsSection___id'
  | 'bannerSection___home_page___aboutUsSection___node_locale'
  | 'bannerSection___home_page___aboutUsSection___sectionTitle'
  | 'bannerSection___home_page___aboutUsSection___home_page'
  | 'bannerSection___home_page___aboutUsSection___spaceId'
  | 'bannerSection___home_page___aboutUsSection___createdAt'
  | 'bannerSection___home_page___aboutUsSection___updatedAt'
  | 'bannerSection___home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'bannerSection___home_page___aboutUsSection___children'
  | 'bannerSection___home_page___activitiesSection'
  | 'bannerSection___home_page___activitiesSection___contentful_id'
  | 'bannerSection___home_page___activitiesSection___id'
  | 'bannerSection___home_page___activitiesSection___node_locale'
  | 'bannerSection___home_page___activitiesSection___activitySectionTitle'
  | 'bannerSection___home_page___activitiesSection___activity'
  | 'bannerSection___home_page___activitiesSection___home_page'
  | 'bannerSection___home_page___activitiesSection___spaceId'
  | 'bannerSection___home_page___activitiesSection___createdAt'
  | 'bannerSection___home_page___activitiesSection___updatedAt'
  | 'bannerSection___home_page___activitiesSection___children'
  | 'bannerSection___home_page___spaceId'
  | 'bannerSection___home_page___createdAt'
  | 'bannerSection___home_page___updatedAt'
  | 'bannerSection___home_page___sys___type'
  | 'bannerSection___home_page___sys___revision'
  | 'bannerSection___home_page___parent___id'
  | 'bannerSection___home_page___parent___children'
  | 'bannerSection___home_page___children'
  | 'bannerSection___home_page___children___id'
  | 'bannerSection___home_page___children___children'
  | 'bannerSection___home_page___internal___content'
  | 'bannerSection___home_page___internal___contentDigest'
  | 'bannerSection___home_page___internal___description'
  | 'bannerSection___home_page___internal___fieldOwners'
  | 'bannerSection___home_page___internal___ignoreType'
  | 'bannerSection___home_page___internal___mediaType'
  | 'bannerSection___home_page___internal___owner'
  | 'bannerSection___home_page___internal___type'
  | 'bannerSection___spaceId'
  | 'bannerSection___createdAt'
  | 'bannerSection___updatedAt'
  | 'bannerSection___sys___type'
  | 'bannerSection___sys___revision'
  | 'bannerSection___parent___id'
  | 'bannerSection___parent___parent___id'
  | 'bannerSection___parent___parent___children'
  | 'bannerSection___parent___children'
  | 'bannerSection___parent___children___id'
  | 'bannerSection___parent___children___children'
  | 'bannerSection___parent___internal___content'
  | 'bannerSection___parent___internal___contentDigest'
  | 'bannerSection___parent___internal___description'
  | 'bannerSection___parent___internal___fieldOwners'
  | 'bannerSection___parent___internal___ignoreType'
  | 'bannerSection___parent___internal___mediaType'
  | 'bannerSection___parent___internal___owner'
  | 'bannerSection___parent___internal___type'
  | 'bannerSection___children'
  | 'bannerSection___children___id'
  | 'bannerSection___children___parent___id'
  | 'bannerSection___children___parent___children'
  | 'bannerSection___children___children'
  | 'bannerSection___children___children___id'
  | 'bannerSection___children___children___children'
  | 'bannerSection___children___internal___content'
  | 'bannerSection___children___internal___contentDigest'
  | 'bannerSection___children___internal___description'
  | 'bannerSection___children___internal___fieldOwners'
  | 'bannerSection___children___internal___ignoreType'
  | 'bannerSection___children___internal___mediaType'
  | 'bannerSection___children___internal___owner'
  | 'bannerSection___children___internal___type'
  | 'bannerSection___internal___content'
  | 'bannerSection___internal___contentDigest'
  | 'bannerSection___internal___description'
  | 'bannerSection___internal___fieldOwners'
  | 'bannerSection___internal___ignoreType'
  | 'bannerSection___internal___mediaType'
  | 'bannerSection___internal___owner'
  | 'bannerSection___internal___type'
  | 'aboutUsSection___contentful_id'
  | 'aboutUsSection___id'
  | 'aboutUsSection___node_locale'
  | 'aboutUsSection___sectionTitle'
  | 'aboutUsSection___home_page'
  | 'aboutUsSection___home_page___contentful_id'
  | 'aboutUsSection___home_page___id'
  | 'aboutUsSection___home_page___node_locale'
  | 'aboutUsSection___home_page___bannerSection'
  | 'aboutUsSection___home_page___bannerSection___contentful_id'
  | 'aboutUsSection___home_page___bannerSection___id'
  | 'aboutUsSection___home_page___bannerSection___node_locale'
  | 'aboutUsSection___home_page___bannerSection___title'
  | 'aboutUsSection___home_page___bannerSection___image'
  | 'aboutUsSection___home_page___bannerSection___home_page'
  | 'aboutUsSection___home_page___bannerSection___spaceId'
  | 'aboutUsSection___home_page___bannerSection___createdAt'
  | 'aboutUsSection___home_page___bannerSection___updatedAt'
  | 'aboutUsSection___home_page___bannerSection___children'
  | 'aboutUsSection___home_page___aboutUsSection___contentful_id'
  | 'aboutUsSection___home_page___aboutUsSection___id'
  | 'aboutUsSection___home_page___aboutUsSection___node_locale'
  | 'aboutUsSection___home_page___aboutUsSection___sectionTitle'
  | 'aboutUsSection___home_page___aboutUsSection___home_page'
  | 'aboutUsSection___home_page___aboutUsSection___spaceId'
  | 'aboutUsSection___home_page___aboutUsSection___createdAt'
  | 'aboutUsSection___home_page___aboutUsSection___updatedAt'
  | 'aboutUsSection___home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'aboutUsSection___home_page___aboutUsSection___children'
  | 'aboutUsSection___home_page___activitiesSection'
  | 'aboutUsSection___home_page___activitiesSection___contentful_id'
  | 'aboutUsSection___home_page___activitiesSection___id'
  | 'aboutUsSection___home_page___activitiesSection___node_locale'
  | 'aboutUsSection___home_page___activitiesSection___activitySectionTitle'
  | 'aboutUsSection___home_page___activitiesSection___activity'
  | 'aboutUsSection___home_page___activitiesSection___home_page'
  | 'aboutUsSection___home_page___activitiesSection___spaceId'
  | 'aboutUsSection___home_page___activitiesSection___createdAt'
  | 'aboutUsSection___home_page___activitiesSection___updatedAt'
  | 'aboutUsSection___home_page___activitiesSection___children'
  | 'aboutUsSection___home_page___spaceId'
  | 'aboutUsSection___home_page___createdAt'
  | 'aboutUsSection___home_page___updatedAt'
  | 'aboutUsSection___home_page___sys___type'
  | 'aboutUsSection___home_page___sys___revision'
  | 'aboutUsSection___home_page___parent___id'
  | 'aboutUsSection___home_page___parent___children'
  | 'aboutUsSection___home_page___children'
  | 'aboutUsSection___home_page___children___id'
  | 'aboutUsSection___home_page___children___children'
  | 'aboutUsSection___home_page___internal___content'
  | 'aboutUsSection___home_page___internal___contentDigest'
  | 'aboutUsSection___home_page___internal___description'
  | 'aboutUsSection___home_page___internal___fieldOwners'
  | 'aboutUsSection___home_page___internal___ignoreType'
  | 'aboutUsSection___home_page___internal___mediaType'
  | 'aboutUsSection___home_page___internal___owner'
  | 'aboutUsSection___home_page___internal___type'
  | 'aboutUsSection___aboutUsDescription___id'
  | 'aboutUsSection___aboutUsDescription___parent___id'
  | 'aboutUsSection___aboutUsDescription___parent___children'
  | 'aboutUsSection___aboutUsDescription___children'
  | 'aboutUsSection___aboutUsDescription___children___id'
  | 'aboutUsSection___aboutUsDescription___children___children'
  | 'aboutUsSection___aboutUsDescription___internal___content'
  | 'aboutUsSection___aboutUsDescription___internal___contentDigest'
  | 'aboutUsSection___aboutUsDescription___internal___description'
  | 'aboutUsSection___aboutUsDescription___internal___fieldOwners'
  | 'aboutUsSection___aboutUsDescription___internal___ignoreType'
  | 'aboutUsSection___aboutUsDescription___internal___mediaType'
  | 'aboutUsSection___aboutUsDescription___internal___owner'
  | 'aboutUsSection___aboutUsDescription___internal___type'
  | 'aboutUsSection___aboutUsDescription___aboutUsDescription'
  | 'aboutUsSection___aboutUsDescription___sys___type'
  | 'aboutUsSection___spaceId'
  | 'aboutUsSection___createdAt'
  | 'aboutUsSection___updatedAt'
  | 'aboutUsSection___sys___type'
  | 'aboutUsSection___sys___revision'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___id'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___parent___children'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___children___id'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___children___children'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___content'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___contentDigest'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___description'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___fieldOwners'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___ignoreType'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___mediaType'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___owner'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___internal___type'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___sys___type'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___parent___id'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___parent___children'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___children___id'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___children___children'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___content'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___contentDigest'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___description'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___fieldOwners'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___ignoreType'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___mediaType'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___owner'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___internal___type'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___sys___type'
  | 'aboutUsSection___parent___id'
  | 'aboutUsSection___parent___parent___id'
  | 'aboutUsSection___parent___parent___children'
  | 'aboutUsSection___parent___children'
  | 'aboutUsSection___parent___children___id'
  | 'aboutUsSection___parent___children___children'
  | 'aboutUsSection___parent___internal___content'
  | 'aboutUsSection___parent___internal___contentDigest'
  | 'aboutUsSection___parent___internal___description'
  | 'aboutUsSection___parent___internal___fieldOwners'
  | 'aboutUsSection___parent___internal___ignoreType'
  | 'aboutUsSection___parent___internal___mediaType'
  | 'aboutUsSection___parent___internal___owner'
  | 'aboutUsSection___parent___internal___type'
  | 'aboutUsSection___children'
  | 'aboutUsSection___children___id'
  | 'aboutUsSection___children___parent___id'
  | 'aboutUsSection___children___parent___children'
  | 'aboutUsSection___children___children'
  | 'aboutUsSection___children___children___id'
  | 'aboutUsSection___children___children___children'
  | 'aboutUsSection___children___internal___content'
  | 'aboutUsSection___children___internal___contentDigest'
  | 'aboutUsSection___children___internal___description'
  | 'aboutUsSection___children___internal___fieldOwners'
  | 'aboutUsSection___children___internal___ignoreType'
  | 'aboutUsSection___children___internal___mediaType'
  | 'aboutUsSection___children___internal___owner'
  | 'aboutUsSection___children___internal___type'
  | 'aboutUsSection___internal___content'
  | 'aboutUsSection___internal___contentDigest'
  | 'aboutUsSection___internal___description'
  | 'aboutUsSection___internal___fieldOwners'
  | 'aboutUsSection___internal___ignoreType'
  | 'aboutUsSection___internal___mediaType'
  | 'aboutUsSection___internal___owner'
  | 'aboutUsSection___internal___type'
  | 'activitiesSection'
  | 'activitiesSection___contentful_id'
  | 'activitiesSection___id'
  | 'activitiesSection___node_locale'
  | 'activitiesSection___activitySectionTitle'
  | 'activitiesSection___activity'
  | 'activitiesSection___activity___contentful_id'
  | 'activitiesSection___activity___id'
  | 'activitiesSection___activity___node_locale'
  | 'activitiesSection___activity___activityCategory'
  | 'activitiesSection___activity___activityImage___contentful_id'
  | 'activitiesSection___activity___activityImage___id'
  | 'activitiesSection___activity___activityImage___spaceId'
  | 'activitiesSection___activity___activityImage___createdAt'
  | 'activitiesSection___activity___activityImage___updatedAt'
  | 'activitiesSection___activity___activityImage___title'
  | 'activitiesSection___activity___activityImage___description'
  | 'activitiesSection___activity___activityImage___node_locale'
  | 'activitiesSection___activity___activityImage___gatsbyImageData'
  | 'activitiesSection___activity___activityImage___children'
  | 'activitiesSection___activity___activity_section'
  | 'activitiesSection___activity___activity_section___contentful_id'
  | 'activitiesSection___activity___activity_section___id'
  | 'activitiesSection___activity___activity_section___node_locale'
  | 'activitiesSection___activity___activity_section___activitySectionTitle'
  | 'activitiesSection___activity___activity_section___activity'
  | 'activitiesSection___activity___activity_section___home_page'
  | 'activitiesSection___activity___activity_section___spaceId'
  | 'activitiesSection___activity___activity_section___createdAt'
  | 'activitiesSection___activity___activity_section___updatedAt'
  | 'activitiesSection___activity___activity_section___children'
  | 'activitiesSection___activity___activityDescription___id'
  | 'activitiesSection___activity___activityDescription___children'
  | 'activitiesSection___activity___activityDescription___activityDescription'
  | 'activitiesSection___activity___spaceId'
  | 'activitiesSection___activity___createdAt'
  | 'activitiesSection___activity___updatedAt'
  | 'activitiesSection___activity___sys___type'
  | 'activitiesSection___activity___sys___revision'
  | 'activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode___id'
  | 'activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode___children'
  | 'activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'activitiesSection___activity___childContentfulActivityActivityDescriptionTextNode___id'
  | 'activitiesSection___activity___childContentfulActivityActivityDescriptionTextNode___children'
  | 'activitiesSection___activity___childContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'activitiesSection___activity___parent___id'
  | 'activitiesSection___activity___parent___children'
  | 'activitiesSection___activity___children'
  | 'activitiesSection___activity___children___id'
  | 'activitiesSection___activity___children___children'
  | 'activitiesSection___activity___internal___content'
  | 'activitiesSection___activity___internal___contentDigest'
  | 'activitiesSection___activity___internal___description'
  | 'activitiesSection___activity___internal___fieldOwners'
  | 'activitiesSection___activity___internal___ignoreType'
  | 'activitiesSection___activity___internal___mediaType'
  | 'activitiesSection___activity___internal___owner'
  | 'activitiesSection___activity___internal___type'
  | 'activitiesSection___home_page'
  | 'activitiesSection___home_page___contentful_id'
  | 'activitiesSection___home_page___id'
  | 'activitiesSection___home_page___node_locale'
  | 'activitiesSection___home_page___bannerSection'
  | 'activitiesSection___home_page___bannerSection___contentful_id'
  | 'activitiesSection___home_page___bannerSection___id'
  | 'activitiesSection___home_page___bannerSection___node_locale'
  | 'activitiesSection___home_page___bannerSection___title'
  | 'activitiesSection___home_page___bannerSection___image'
  | 'activitiesSection___home_page___bannerSection___home_page'
  | 'activitiesSection___home_page___bannerSection___spaceId'
  | 'activitiesSection___home_page___bannerSection___createdAt'
  | 'activitiesSection___home_page___bannerSection___updatedAt'
  | 'activitiesSection___home_page___bannerSection___children'
  | 'activitiesSection___home_page___aboutUsSection___contentful_id'
  | 'activitiesSection___home_page___aboutUsSection___id'
  | 'activitiesSection___home_page___aboutUsSection___node_locale'
  | 'activitiesSection___home_page___aboutUsSection___sectionTitle'
  | 'activitiesSection___home_page___aboutUsSection___home_page'
  | 'activitiesSection___home_page___aboutUsSection___spaceId'
  | 'activitiesSection___home_page___aboutUsSection___createdAt'
  | 'activitiesSection___home_page___aboutUsSection___updatedAt'
  | 'activitiesSection___home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'activitiesSection___home_page___aboutUsSection___children'
  | 'activitiesSection___home_page___activitiesSection'
  | 'activitiesSection___home_page___activitiesSection___contentful_id'
  | 'activitiesSection___home_page___activitiesSection___id'
  | 'activitiesSection___home_page___activitiesSection___node_locale'
  | 'activitiesSection___home_page___activitiesSection___activitySectionTitle'
  | 'activitiesSection___home_page___activitiesSection___activity'
  | 'activitiesSection___home_page___activitiesSection___home_page'
  | 'activitiesSection___home_page___activitiesSection___spaceId'
  | 'activitiesSection___home_page___activitiesSection___createdAt'
  | 'activitiesSection___home_page___activitiesSection___updatedAt'
  | 'activitiesSection___home_page___activitiesSection___children'
  | 'activitiesSection___home_page___spaceId'
  | 'activitiesSection___home_page___createdAt'
  | 'activitiesSection___home_page___updatedAt'
  | 'activitiesSection___home_page___sys___type'
  | 'activitiesSection___home_page___sys___revision'
  | 'activitiesSection___home_page___parent___id'
  | 'activitiesSection___home_page___parent___children'
  | 'activitiesSection___home_page___children'
  | 'activitiesSection___home_page___children___id'
  | 'activitiesSection___home_page___children___children'
  | 'activitiesSection___home_page___internal___content'
  | 'activitiesSection___home_page___internal___contentDigest'
  | 'activitiesSection___home_page___internal___description'
  | 'activitiesSection___home_page___internal___fieldOwners'
  | 'activitiesSection___home_page___internal___ignoreType'
  | 'activitiesSection___home_page___internal___mediaType'
  | 'activitiesSection___home_page___internal___owner'
  | 'activitiesSection___home_page___internal___type'
  | 'activitiesSection___spaceId'
  | 'activitiesSection___createdAt'
  | 'activitiesSection___updatedAt'
  | 'activitiesSection___sys___type'
  | 'activitiesSection___sys___revision'
  | 'activitiesSection___parent___id'
  | 'activitiesSection___parent___parent___id'
  | 'activitiesSection___parent___parent___children'
  | 'activitiesSection___parent___children'
  | 'activitiesSection___parent___children___id'
  | 'activitiesSection___parent___children___children'
  | 'activitiesSection___parent___internal___content'
  | 'activitiesSection___parent___internal___contentDigest'
  | 'activitiesSection___parent___internal___description'
  | 'activitiesSection___parent___internal___fieldOwners'
  | 'activitiesSection___parent___internal___ignoreType'
  | 'activitiesSection___parent___internal___mediaType'
  | 'activitiesSection___parent___internal___owner'
  | 'activitiesSection___parent___internal___type'
  | 'activitiesSection___children'
  | 'activitiesSection___children___id'
  | 'activitiesSection___children___parent___id'
  | 'activitiesSection___children___parent___children'
  | 'activitiesSection___children___children'
  | 'activitiesSection___children___children___id'
  | 'activitiesSection___children___children___children'
  | 'activitiesSection___children___internal___content'
  | 'activitiesSection___children___internal___contentDigest'
  | 'activitiesSection___children___internal___description'
  | 'activitiesSection___children___internal___fieldOwners'
  | 'activitiesSection___children___internal___ignoreType'
  | 'activitiesSection___children___internal___mediaType'
  | 'activitiesSection___children___internal___owner'
  | 'activitiesSection___children___internal___type'
  | 'activitiesSection___internal___content'
  | 'activitiesSection___internal___contentDigest'
  | 'activitiesSection___internal___description'
  | 'activitiesSection___internal___fieldOwners'
  | 'activitiesSection___internal___ignoreType'
  | 'activitiesSection___internal___mediaType'
  | 'activitiesSection___internal___owner'
  | 'activitiesSection___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulHomePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHomePageEdge>;
  nodes: Array<ContentfulHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulHomePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulHomePageGroupConnectionDistinctArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageGroupConnectionMaxArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageGroupConnectionMinArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageGroupConnectionSumArgs = {
  field: ContentfulHomePageFieldsEnum;
};


export type ContentfulHomePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHomePageFieldsEnum;
};

export type ContentfulHomePageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulActivitySectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulActivitySectionEdge>;
  nodes: Array<ContentfulActivitySection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulActivitySectionGroupConnection>;
};


export type ContentfulActivitySectionConnectionDistinctArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionConnectionMaxArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionConnectionMinArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionConnectionSumArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulActivitySectionFieldsEnum;
};

export type ContentfulActivitySectionEdge = {
  next?: Maybe<ContentfulActivitySection>;
  node: ContentfulActivitySection;
  previous?: Maybe<ContentfulActivitySection>;
};

export type ContentfulActivitySectionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'activitySectionTitle'
  | 'activity'
  | 'activity___contentful_id'
  | 'activity___id'
  | 'activity___node_locale'
  | 'activity___activityCategory'
  | 'activity___activityImage___contentful_id'
  | 'activity___activityImage___id'
  | 'activity___activityImage___spaceId'
  | 'activity___activityImage___createdAt'
  | 'activity___activityImage___updatedAt'
  | 'activity___activityImage___file___url'
  | 'activity___activityImage___file___fileName'
  | 'activity___activityImage___file___contentType'
  | 'activity___activityImage___title'
  | 'activity___activityImage___description'
  | 'activity___activityImage___node_locale'
  | 'activity___activityImage___sys___type'
  | 'activity___activityImage___sys___revision'
  | 'activity___activityImage___fixed___base64'
  | 'activity___activityImage___fixed___tracedSVG'
  | 'activity___activityImage___fixed___aspectRatio'
  | 'activity___activityImage___fixed___width'
  | 'activity___activityImage___fixed___height'
  | 'activity___activityImage___fixed___src'
  | 'activity___activityImage___fixed___srcSet'
  | 'activity___activityImage___fixed___srcWebp'
  | 'activity___activityImage___fixed___srcSetWebp'
  | 'activity___activityImage___fluid___base64'
  | 'activity___activityImage___fluid___tracedSVG'
  | 'activity___activityImage___fluid___aspectRatio'
  | 'activity___activityImage___fluid___src'
  | 'activity___activityImage___fluid___srcSet'
  | 'activity___activityImage___fluid___srcWebp'
  | 'activity___activityImage___fluid___srcSetWebp'
  | 'activity___activityImage___fluid___sizes'
  | 'activity___activityImage___gatsbyImageData'
  | 'activity___activityImage___resize___base64'
  | 'activity___activityImage___resize___tracedSVG'
  | 'activity___activityImage___resize___src'
  | 'activity___activityImage___resize___width'
  | 'activity___activityImage___resize___height'
  | 'activity___activityImage___resize___aspectRatio'
  | 'activity___activityImage___parent___id'
  | 'activity___activityImage___parent___children'
  | 'activity___activityImage___children'
  | 'activity___activityImage___children___id'
  | 'activity___activityImage___children___children'
  | 'activity___activityImage___internal___content'
  | 'activity___activityImage___internal___contentDigest'
  | 'activity___activityImage___internal___description'
  | 'activity___activityImage___internal___fieldOwners'
  | 'activity___activityImage___internal___ignoreType'
  | 'activity___activityImage___internal___mediaType'
  | 'activity___activityImage___internal___owner'
  | 'activity___activityImage___internal___type'
  | 'activity___activity_section'
  | 'activity___activity_section___contentful_id'
  | 'activity___activity_section___id'
  | 'activity___activity_section___node_locale'
  | 'activity___activity_section___activitySectionTitle'
  | 'activity___activity_section___activity'
  | 'activity___activity_section___activity___contentful_id'
  | 'activity___activity_section___activity___id'
  | 'activity___activity_section___activity___node_locale'
  | 'activity___activity_section___activity___activityCategory'
  | 'activity___activity_section___activity___activity_section'
  | 'activity___activity_section___activity___spaceId'
  | 'activity___activity_section___activity___createdAt'
  | 'activity___activity_section___activity___updatedAt'
  | 'activity___activity_section___activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'activity___activity_section___activity___children'
  | 'activity___activity_section___home_page'
  | 'activity___activity_section___home_page___contentful_id'
  | 'activity___activity_section___home_page___id'
  | 'activity___activity_section___home_page___node_locale'
  | 'activity___activity_section___home_page___bannerSection'
  | 'activity___activity_section___home_page___activitiesSection'
  | 'activity___activity_section___home_page___spaceId'
  | 'activity___activity_section___home_page___createdAt'
  | 'activity___activity_section___home_page___updatedAt'
  | 'activity___activity_section___home_page___children'
  | 'activity___activity_section___spaceId'
  | 'activity___activity_section___createdAt'
  | 'activity___activity_section___updatedAt'
  | 'activity___activity_section___sys___type'
  | 'activity___activity_section___sys___revision'
  | 'activity___activity_section___parent___id'
  | 'activity___activity_section___parent___children'
  | 'activity___activity_section___children'
  | 'activity___activity_section___children___id'
  | 'activity___activity_section___children___children'
  | 'activity___activity_section___internal___content'
  | 'activity___activity_section___internal___contentDigest'
  | 'activity___activity_section___internal___description'
  | 'activity___activity_section___internal___fieldOwners'
  | 'activity___activity_section___internal___ignoreType'
  | 'activity___activity_section___internal___mediaType'
  | 'activity___activity_section___internal___owner'
  | 'activity___activity_section___internal___type'
  | 'activity___activityDescription___id'
  | 'activity___activityDescription___parent___id'
  | 'activity___activityDescription___parent___children'
  | 'activity___activityDescription___children'
  | 'activity___activityDescription___children___id'
  | 'activity___activityDescription___children___children'
  | 'activity___activityDescription___internal___content'
  | 'activity___activityDescription___internal___contentDigest'
  | 'activity___activityDescription___internal___description'
  | 'activity___activityDescription___internal___fieldOwners'
  | 'activity___activityDescription___internal___ignoreType'
  | 'activity___activityDescription___internal___mediaType'
  | 'activity___activityDescription___internal___owner'
  | 'activity___activityDescription___internal___type'
  | 'activity___activityDescription___activityDescription'
  | 'activity___activityDescription___sys___type'
  | 'activity___spaceId'
  | 'activity___createdAt'
  | 'activity___updatedAt'
  | 'activity___sys___type'
  | 'activity___sys___revision'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___id'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___parent___id'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___parent___children'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___children'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___children___id'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___children___children'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___content'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___contentDigest'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___description'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___fieldOwners'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___ignoreType'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___mediaType'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___owner'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___internal___type'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'activity___childrenContentfulActivityActivityDescriptionTextNode___sys___type'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___id'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___parent___id'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___parent___children'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___children'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___children___id'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___children___children'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___content'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___contentDigest'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___description'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___fieldOwners'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___ignoreType'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___mediaType'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___owner'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___internal___type'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___activityDescription'
  | 'activity___childContentfulActivityActivityDescriptionTextNode___sys___type'
  | 'activity___parent___id'
  | 'activity___parent___parent___id'
  | 'activity___parent___parent___children'
  | 'activity___parent___children'
  | 'activity___parent___children___id'
  | 'activity___parent___children___children'
  | 'activity___parent___internal___content'
  | 'activity___parent___internal___contentDigest'
  | 'activity___parent___internal___description'
  | 'activity___parent___internal___fieldOwners'
  | 'activity___parent___internal___ignoreType'
  | 'activity___parent___internal___mediaType'
  | 'activity___parent___internal___owner'
  | 'activity___parent___internal___type'
  | 'activity___children'
  | 'activity___children___id'
  | 'activity___children___parent___id'
  | 'activity___children___parent___children'
  | 'activity___children___children'
  | 'activity___children___children___id'
  | 'activity___children___children___children'
  | 'activity___children___internal___content'
  | 'activity___children___internal___contentDigest'
  | 'activity___children___internal___description'
  | 'activity___children___internal___fieldOwners'
  | 'activity___children___internal___ignoreType'
  | 'activity___children___internal___mediaType'
  | 'activity___children___internal___owner'
  | 'activity___children___internal___type'
  | 'activity___internal___content'
  | 'activity___internal___contentDigest'
  | 'activity___internal___description'
  | 'activity___internal___fieldOwners'
  | 'activity___internal___ignoreType'
  | 'activity___internal___mediaType'
  | 'activity___internal___owner'
  | 'activity___internal___type'
  | 'home_page'
  | 'home_page___contentful_id'
  | 'home_page___id'
  | 'home_page___node_locale'
  | 'home_page___bannerSection'
  | 'home_page___bannerSection___contentful_id'
  | 'home_page___bannerSection___id'
  | 'home_page___bannerSection___node_locale'
  | 'home_page___bannerSection___title'
  | 'home_page___bannerSection___image'
  | 'home_page___bannerSection___image___contentful_id'
  | 'home_page___bannerSection___image___id'
  | 'home_page___bannerSection___image___spaceId'
  | 'home_page___bannerSection___image___createdAt'
  | 'home_page___bannerSection___image___updatedAt'
  | 'home_page___bannerSection___image___title'
  | 'home_page___bannerSection___image___description'
  | 'home_page___bannerSection___image___node_locale'
  | 'home_page___bannerSection___image___gatsbyImageData'
  | 'home_page___bannerSection___image___children'
  | 'home_page___bannerSection___home_page'
  | 'home_page___bannerSection___home_page___contentful_id'
  | 'home_page___bannerSection___home_page___id'
  | 'home_page___bannerSection___home_page___node_locale'
  | 'home_page___bannerSection___home_page___bannerSection'
  | 'home_page___bannerSection___home_page___activitiesSection'
  | 'home_page___bannerSection___home_page___spaceId'
  | 'home_page___bannerSection___home_page___createdAt'
  | 'home_page___bannerSection___home_page___updatedAt'
  | 'home_page___bannerSection___home_page___children'
  | 'home_page___bannerSection___spaceId'
  | 'home_page___bannerSection___createdAt'
  | 'home_page___bannerSection___updatedAt'
  | 'home_page___bannerSection___sys___type'
  | 'home_page___bannerSection___sys___revision'
  | 'home_page___bannerSection___parent___id'
  | 'home_page___bannerSection___parent___children'
  | 'home_page___bannerSection___children'
  | 'home_page___bannerSection___children___id'
  | 'home_page___bannerSection___children___children'
  | 'home_page___bannerSection___internal___content'
  | 'home_page___bannerSection___internal___contentDigest'
  | 'home_page___bannerSection___internal___description'
  | 'home_page___bannerSection___internal___fieldOwners'
  | 'home_page___bannerSection___internal___ignoreType'
  | 'home_page___bannerSection___internal___mediaType'
  | 'home_page___bannerSection___internal___owner'
  | 'home_page___bannerSection___internal___type'
  | 'home_page___aboutUsSection___contentful_id'
  | 'home_page___aboutUsSection___id'
  | 'home_page___aboutUsSection___node_locale'
  | 'home_page___aboutUsSection___sectionTitle'
  | 'home_page___aboutUsSection___home_page'
  | 'home_page___aboutUsSection___home_page___contentful_id'
  | 'home_page___aboutUsSection___home_page___id'
  | 'home_page___aboutUsSection___home_page___node_locale'
  | 'home_page___aboutUsSection___home_page___bannerSection'
  | 'home_page___aboutUsSection___home_page___activitiesSection'
  | 'home_page___aboutUsSection___home_page___spaceId'
  | 'home_page___aboutUsSection___home_page___createdAt'
  | 'home_page___aboutUsSection___home_page___updatedAt'
  | 'home_page___aboutUsSection___home_page___children'
  | 'home_page___aboutUsSection___aboutUsDescription___id'
  | 'home_page___aboutUsSection___aboutUsDescription___children'
  | 'home_page___aboutUsSection___aboutUsDescription___aboutUsDescription'
  | 'home_page___aboutUsSection___spaceId'
  | 'home_page___aboutUsSection___createdAt'
  | 'home_page___aboutUsSection___updatedAt'
  | 'home_page___aboutUsSection___sys___type'
  | 'home_page___aboutUsSection___sys___revision'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'home_page___aboutUsSection___childrenContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___id'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___children'
  | 'home_page___aboutUsSection___childContentfulAboutUsAboutUsDescriptionTextNode___aboutUsDescription'
  | 'home_page___aboutUsSection___parent___id'
  | 'home_page___aboutUsSection___parent___children'
  | 'home_page___aboutUsSection___children'
  | 'home_page___aboutUsSection___children___id'
  | 'home_page___aboutUsSection___children___children'
  | 'home_page___aboutUsSection___internal___content'
  | 'home_page___aboutUsSection___internal___contentDigest'
  | 'home_page___aboutUsSection___internal___description'
  | 'home_page___aboutUsSection___internal___fieldOwners'
  | 'home_page___aboutUsSection___internal___ignoreType'
  | 'home_page___aboutUsSection___internal___mediaType'
  | 'home_page___aboutUsSection___internal___owner'
  | 'home_page___aboutUsSection___internal___type'
  | 'home_page___activitiesSection'
  | 'home_page___activitiesSection___contentful_id'
  | 'home_page___activitiesSection___id'
  | 'home_page___activitiesSection___node_locale'
  | 'home_page___activitiesSection___activitySectionTitle'
  | 'home_page___activitiesSection___activity'
  | 'home_page___activitiesSection___activity___contentful_id'
  | 'home_page___activitiesSection___activity___id'
  | 'home_page___activitiesSection___activity___node_locale'
  | 'home_page___activitiesSection___activity___activityCategory'
  | 'home_page___activitiesSection___activity___activity_section'
  | 'home_page___activitiesSection___activity___spaceId'
  | 'home_page___activitiesSection___activity___createdAt'
  | 'home_page___activitiesSection___activity___updatedAt'
  | 'home_page___activitiesSection___activity___childrenContentfulActivityActivityDescriptionTextNode'
  | 'home_page___activitiesSection___activity___children'
  | 'home_page___activitiesSection___home_page'
  | 'home_page___activitiesSection___home_page___contentful_id'
  | 'home_page___activitiesSection___home_page___id'
  | 'home_page___activitiesSection___home_page___node_locale'
  | 'home_page___activitiesSection___home_page___bannerSection'
  | 'home_page___activitiesSection___home_page___activitiesSection'
  | 'home_page___activitiesSection___home_page___spaceId'
  | 'home_page___activitiesSection___home_page___createdAt'
  | 'home_page___activitiesSection___home_page___updatedAt'
  | 'home_page___activitiesSection___home_page___children'
  | 'home_page___activitiesSection___spaceId'
  | 'home_page___activitiesSection___createdAt'
  | 'home_page___activitiesSection___updatedAt'
  | 'home_page___activitiesSection___sys___type'
  | 'home_page___activitiesSection___sys___revision'
  | 'home_page___activitiesSection___parent___id'
  | 'home_page___activitiesSection___parent___children'
  | 'home_page___activitiesSection___children'
  | 'home_page___activitiesSection___children___id'
  | 'home_page___activitiesSection___children___children'
  | 'home_page___activitiesSection___internal___content'
  | 'home_page___activitiesSection___internal___contentDigest'
  | 'home_page___activitiesSection___internal___description'
  | 'home_page___activitiesSection___internal___fieldOwners'
  | 'home_page___activitiesSection___internal___ignoreType'
  | 'home_page___activitiesSection___internal___mediaType'
  | 'home_page___activitiesSection___internal___owner'
  | 'home_page___activitiesSection___internal___type'
  | 'home_page___spaceId'
  | 'home_page___createdAt'
  | 'home_page___updatedAt'
  | 'home_page___sys___type'
  | 'home_page___sys___revision'
  | 'home_page___parent___id'
  | 'home_page___parent___parent___id'
  | 'home_page___parent___parent___children'
  | 'home_page___parent___children'
  | 'home_page___parent___children___id'
  | 'home_page___parent___children___children'
  | 'home_page___parent___internal___content'
  | 'home_page___parent___internal___contentDigest'
  | 'home_page___parent___internal___description'
  | 'home_page___parent___internal___fieldOwners'
  | 'home_page___parent___internal___ignoreType'
  | 'home_page___parent___internal___mediaType'
  | 'home_page___parent___internal___owner'
  | 'home_page___parent___internal___type'
  | 'home_page___children'
  | 'home_page___children___id'
  | 'home_page___children___parent___id'
  | 'home_page___children___parent___children'
  | 'home_page___children___children'
  | 'home_page___children___children___id'
  | 'home_page___children___children___children'
  | 'home_page___children___internal___content'
  | 'home_page___children___internal___contentDigest'
  | 'home_page___children___internal___description'
  | 'home_page___children___internal___fieldOwners'
  | 'home_page___children___internal___ignoreType'
  | 'home_page___children___internal___mediaType'
  | 'home_page___children___internal___owner'
  | 'home_page___children___internal___type'
  | 'home_page___internal___content'
  | 'home_page___internal___contentDigest'
  | 'home_page___internal___description'
  | 'home_page___internal___fieldOwners'
  | 'home_page___internal___ignoreType'
  | 'home_page___internal___mediaType'
  | 'home_page___internal___owner'
  | 'home_page___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulActivitySectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulActivitySectionEdge>;
  nodes: Array<ContentfulActivitySection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulActivitySectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulActivitySectionGroupConnectionDistinctArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionGroupConnectionMaxArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionGroupConnectionMinArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionGroupConnectionSumArgs = {
  field: ContentfulActivitySectionFieldsEnum;
};


export type ContentfulActivitySectionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulActivitySectionFieldsEnum;
};

export type ContentfulActivitySectionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulActivitySectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulActivityActivityDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulActivityActivityDescriptionTextNodeEdge>;
  nodes: Array<ContentfulActivityActivityDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulActivityActivityDescriptionTextNodeGroupConnection>;
};


export type ContentfulActivityActivityDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};

export type ContentfulActivityActivityDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulActivityActivityDescriptionTextNode>;
  node: ContentfulActivityActivityDescriptionTextNode;
  previous?: Maybe<ContentfulActivityActivityDescriptionTextNode>;
};

export type ContentfulActivityActivityDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'activityDescription'
  | 'sys___type';

export type ContentfulActivityActivityDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulActivityActivityDescriptionTextNodeEdge>;
  nodes: Array<ContentfulActivityActivityDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulActivityActivityDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulActivityActivityDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};


export type ContentfulActivityActivityDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulActivityActivityDescriptionTextNodeFieldsEnum;
};

export type ContentfulActivityActivityDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulActivityActivityDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutUsAboutUsDescriptionTextNodeEdge>;
  nodes: Array<ContentfulAboutUsAboutUsDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnection>;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNode>;
  node: ContentfulAboutUsAboutUsDescriptionTextNode;
  previous?: Maybe<ContentfulAboutUsAboutUsDescriptionTextNode>;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'aboutUsDescription'
  | 'sys___type';

export type ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutUsAboutUsDescriptionTextNodeEdge>;
  nodes: Array<ContentfulAboutUsAboutUsDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};


export type ContentfulAboutUsAboutUsDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum;
};

export type ContentfulAboutUsAboutUsDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutUsAboutUsDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { contentfulAboutUs?: Maybe<(
    Pick<ContentfulAboutUs, 'sectionTitle'>
    & { aboutUsDescription?: Maybe<Pick<ContentfulAboutUsAboutUsDescriptionTextNode, 'aboutUsDescription'>> }
  )> };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { contentfulActivitySection?: Maybe<(
    Pick<ContentfulActivitySection, 'activitySectionTitle'>
    & { activity?: Maybe<Array<Maybe<(
      Pick<ContentfulActivity, 'activityCategory'>
      & { activityDescription?: Maybe<Pick<ContentfulActivityActivityDescriptionTextNode, 'activityDescription'>>, activityImage?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }> }
    )>>> }
  )> };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { allContentfulBanner: { nodes: Array<(
      Pick<ContentfulBanner, 'title'>
      & { image?: Maybe<Array<Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }>>> }
    )> } };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'author' | 'description' | 'keywords' | 'siteUrl' | 'title'>> }> };
