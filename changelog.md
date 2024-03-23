### PR #208 - Bump the development-dependencies group in /packages/web with 10 updates
##### 2024-03-23

Bumps the development-dependencies group in /packages/web with 10 updates:

| Package | From | To |
| --- | --- | --- |
| [@graphql-codegen/cli](https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli) | `5.0.0` | `5.0.2` |
| [@graphql-codegen/client-preset](https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client) | `4.1.0` | `4.2.4` |
| [@testing-library/dom](https://github.com/testing-library/dom-testing-library) | `8.20.1` | `9.3.4` |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | `6.2.0` | `6.4.2` |
| [@testing-library/react](https://github.com/testing-library/react-testing-library) | `13.4.0` | `14.2.2` |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/HEAD/packages/plugin-react) | `2.2.0` | `4.2.1` |
| [@vitest/ui](https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui) | `0.22.1` | `1.4.0` |
| [jsdom](https://github.com/jsdom/jsdom) | `20.0.3` | `24.0.0` |
| [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) | `3.2.8` | `5.2.4` |
| [vitest](https://github.com/vitest-dev/vitest/tree/HEAD/packages/vitest) | `0.34.6` | `1.4.0` |

Updates `@graphql-codegen/cli` from 5.0.0 to 5.0.2
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/dotansimha/graphql-code-generator/blob/master/packages/graphql-codegen-cli/CHANGELOG.md"><code>@​graphql-codegen/cli</code>'s changelog</a>.</em></p>
<blockquote>
<h2>5.0.2</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9813">#9813</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/4e6956899c96f8954cea8d5bbe32aa35a70cc653"><code>4e69568</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - bumping for a release</p>
</li>
<li>
<p>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/4e6956899c96f8954cea8d5bbe32aa35a70cc653"><code>4e69568</code></a>]:</p>
<ul>
<li><code>@​graphql-codegen/client-preset</code><a href="https://github.com/4"><code>@​4</code></a>.2.2</li>
<li><code>@​graphql-codegen/core</code><a href="https://github.com/4"><code>@​4</code></a>.0.2</li>
<li><code>@​graphql-codegen/plugin-helpers</code><a href="https://github.com/5"><code>@​5</code></a>.0.3</li>
</ul>
</li>
</ul>
<h2>5.0.1</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9811">#9811</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - dependencies updates:</p>
<ul>
<li>Added dependency <a href="https://www.npmjs.com/package/@graphql-codegen/client-preset/v/4.1.0"><code>@graphql-codegen/client-preset@^4.1.0</code> ↗︎</a> (to <code>dependencies</code>)</li>
</ul>
</li>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9811">#9811</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - ignore events in <code>.git</code> directory</p>
</li>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9811">#9811</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - Surface error occurring during import of <code>@​parcel/watcher</code></p>
</li>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9811">#9811</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - Include <code>@​graphql-codegen/client-preset</code> in <code>@​graphql-codegen/cli</code> by default</p>
</li>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9811">#9811</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - fix watcher unable to find highest common directory on Windows</p>
</li>
<li>
<p>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e045</code></a>]:</p>
<ul>
<li><code>@​graphql-codegen/client-preset</code><a href="https://github.com/4"><code>@​4</code></a>.2.0</li>
<li><code>@​graphql-codegen/core</code><a href="https://github.com/4"><code>@​4</code></a>.0.1</li>
<li><code>@​graphql-codegen/plugin-helpers</code><a href="https://github.com/5"><code>@​5</code></a>.0.2</li>
</ul>
</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/56882d26caaa34e1b7c1f45ada61626d3039779e"><code>56882d2</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9837">#9837</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/eaa3d60c11afbe86ba269b2a488891f83089fa03"><code>eaa3d60</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9812">#9812</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e0</code></a> Revert &quot;chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9810">#9810</a>)&quot; (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9811">#9811</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/840c66d88a9b466eb5683b54bfe25b0c168b42fb"><code>840c66d</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9810">#9810</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/137ca2c706eb86b4069d3d91b7f6990eef3b60ba"><code>137ca2c</code></a> Revert &quot;chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9648">#9648</a>)&quot; (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9809">#9809</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/671859c40291c1264ea5fa735518b5de3c4020be"><code>671859c</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9648">#9648</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/1bed87b201b6c0879ef605ec41f5a1acdcbfe1e7"><code>1bed87b</code></a> fix: out-of-memory crash (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/7720">#7720</a>) and significantly improve performance + feat...</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/8a4743f756e6fa6f8af1418ec86dc1b25e5ae294"><code>8a4743f</code></a> chore(deps): update dependency <code>@​types/shell-quote</code> to v1.7.3 (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9732">#9732</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/3883505cc84156adad41ff751832b2e7d2232f5b"><code>3883505</code></a> chore(deps): update dependency <code>@​types/js-yaml</code> to v4.0.8 (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9724">#9724</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/e176eabf16a02951c0dc36408503ebc98cb2a2ab"><code>e176eab</code></a> Include <code>@​graphql-codegen/client-preset</code> in <code>@​graphql-codegen/cli</code> by default (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/graphql-codegen-cli/issues/9">#9</a>...</li>
<li>Additional commits viewable in <a href="https://github.com/dotansimha/graphql-code-generator/commits/@graphql-codegen/cli@5.0.2/packages/graphql-codegen-cli">compare view</a></li>
</ul>
</details>
<br />

Updates `@graphql-codegen/client-preset` from 4.1.0 to 4.2.4
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/dotansimha/graphql-code-generator/releases"><code>@​graphql-codegen/client-preset</code>'s releases</a>.</em></p>
<blockquote>
<h2>Release 2022-08-04T13:12:01.667Z</h2>
<h2><code>@​graphql-codegen/graphql-modules-preset</code><a href="https://github.com/2"><code>@​2</code></a>.5.0</h2>
<h3>Minor Changes</h3>
<ul>
<li><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/6796">#6796</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/8b6e8e6648f2d95cc40873cfc008a545d8a9c46f"><code>8b6e8e664</code></a> Thanks <a href="https://github.com/kamilkisiela"><code>@​kamilkisiela</code></a>! - Introduce requireRootResolvers flag</li>
</ul>
<h2>Release 2022-08-04T13:05:23.977Z</h2>
<p>No release notes provided.</p>
<h2>Release 2022-08-04T13:02:57.827Z</h2>
<p>No release notes provided.</p>
</blockquote>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/dotansimha/graphql-code-generator/blob/master/packages/presets/client/CHANGELOG.md"><code>@​graphql-codegen/client-preset</code>'s changelog</a>.</em></p>
<blockquote>
<h2>4.2.4</h2>
<h3>Patch Changes</h3>
<ul>
<li>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/920b443a401b8cc4811f64ec5b25fc7b4ae32b53"><code>920b443</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/ed9c205d15d7f14ed73e54aecf40e4fad5664e9d"><code>ed9c205</code></a>]:
<ul>
<li><code>@​graphql-codegen/visitor-plugin-common</code><a href="https://github.com/5"><code>@​5</code></a>.1.0</li>
<li><code>@​graphql-codegen/typescript-operations</code><a href="https://github.com/4"><code>@​4</code></a>.2.0</li>
<li><code>@​graphql-codegen/gql-tag-operations</code><a href="https://github.com/4"><code>@​4</code></a>.0.6</li>
<li><code>@​graphql-codegen/typed-document-node</code><a href="https://github.com/5"><code>@​5</code></a>.0.6</li>
<li><code>@​graphql-codegen/typescript</code><a href="https://github.com/4"><code>@​4</code></a>.0.6</li>
</ul>
</li>
</ul>
<h2>4.2.3</h2>
<h3>Patch Changes</h3>
<ul>
<li>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/53f270acfa1da992e0f9d2e50921bb588392f8a5"><code>53f270a</code></a>]:
<ul>
<li><code>@​graphql-codegen/visitor-plugin-common</code><a href="https://github.com/5"><code>@​5</code></a>.0.0</li>
<li><code>@​graphql-codegen/gql-tag-operations</code><a href="https://github.com/4"><code>@​4</code></a>.0.5</li>
<li><code>@​graphql-codegen/typescript-operations</code><a href="https://github.com/4"><code>@​4</code></a>.1.3</li>
<li><code>@​graphql-codegen/typed-document-node</code><a href="https://github.com/5"><code>@​5</code></a>.0.5</li>
<li><code>@​graphql-codegen/typescript</code><a href="https://github.com/4"><code>@​4</code></a>.0.5</li>
</ul>
</li>
</ul>
<h2>4.2.2</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9813">#9813</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/4e6956899c96f8954cea8d5bbe32aa35a70cc653"><code>4e69568</code></a> Thanks <a href="https://github.com/saihaj"><code>@​saihaj</code></a>! - bumping for a release</p>
</li>
<li>
<p>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/4e6956899c96f8954cea8d5bbe32aa35a70cc653"><code>4e69568</code></a>]:</p>
<ul>
<li><code>@​graphql-codegen/visitor-plugin-common</code><a href="https://github.com/4"><code>@​4</code></a>.1.2</li>
<li><code>@​graphql-codegen/typescript-operations</code><a href="https://github.com/4"><code>@​4</code></a>.1.2</li>
<li><code>@​graphql-codegen/add</code><a href="https://github.com/5"><code>@​5</code></a>.0.2</li>
<li><code>@​graphql-codegen/gql-tag-operations</code><a href="https://github.com/4"><code>@​4</code></a>.0.4</li>
<li><code>@​graphql-codegen/typed-document-node</code><a href="https://github.com/5"><code>@​5</code></a>.0.4</li>
<li><code>@​graphql-codegen/typescript</code><a href="https://github.com/4"><code>@​4</code></a>.0.4</li>
<li><code>@​graphql-codegen/plugin-helpers</code><a href="https://github.com/5"><code>@​5</code></a>.0.3</li>
</ul>
</li>
</ul>
<h2>4.2.1</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9557">#9557</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/48ddaeae1809cb52e6de5aa14f0d47bedde9d547"><code>48ddaeae1</code></a> Thanks <a href="https://github.com/konomae"><code>@​konomae</code></a>! - Add eslint-disable comment to fragment-masking.ts</p>
</li>
<li>
<p>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/7718a8113dc6282475cb738f1e28698b8221fa2f"><code>7718a8113</code></a>]:</p>
<ul>
<li><code>@​graphql-codegen/visitor-plugin-common</code><a href="https://github.com/4"><code>@​4</code></a>.1.1</li>
<li><code>@​graphql-codegen/gql-tag-operations</code><a href="https://github.com/4"><code>@​4</code></a>.0.3</li>
<li><code>@​graphql-codegen/typescript-operations</code><a href="https://github.com/4"><code>@​4</code></a>.1.1</li>
<li><code>@​graphql-codegen/typed-document-node</code><a href="https://github.com/5"><code>@​5</code></a>.0.3</li>
<li><code>@​graphql-codegen/typescript</code><a href="https://github.com/4"><code>@​4</code></a>.0.3</li>
</ul>
</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/83a586a8e213bc7642126f49b7567b462cd47367"><code>83a586a</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9847">#9847</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/eea24708788f01865e13a5d9ec85768f26c9b81b"><code>eea2470</code></a> chore(deps): update dependency <code>@​types/babel</code>__helper-plugin-utils to v7.10.3 (...</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/a5c573dc074c59ef63cca0ca86a208d1a134262c"><code>a5c573d</code></a> chore(deps): update dependency <code>@​types/babel</code>__template to v7.4.4 (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9853">#9853</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/8c40cdff828f919c98c5df2cd5d4b4fc581f8e90"><code>8c40cdf</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9846">#9846</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/56882d26caaa34e1b7c1f45ada61626d3039779e"><code>56882d2</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9837">#9837</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/ebd081798fdcf5e8d5af557a5e17361992a1a0af"><code>ebd0817</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9819">#9819</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/48ddaeae1809cb52e6de5aa14f0d47bedde9d547"><code>48ddaea</code></a> Add eslint-disable comment to fragment-masking.ts (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9557">#9557</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/eaa3d60c11afbe86ba269b2a488891f83089fa03"><code>eaa3d60</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9812">#9812</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/d8364e045a46ca6e8173583b5108d161c6832975"><code>d8364e0</code></a> Revert &quot;chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9810">#9810</a>)&quot; (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9811">#9811</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/840c66d88a9b466eb5683b54bfe25b0c168b42fb"><code>840c66d</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client/issues/9810">#9810</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/dotansimha/graphql-code-generator/commits/@graphql-codegen/client-preset@4.2.4/packages/presets/client">compare view</a></li>
</ul>
</details>
<br />

Updates `@testing-library/dom` from 8.20.1 to 9.3.4
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/testing-library/dom-testing-library/releases"><code>@​testing-library/dom</code>'s releases</a>.</em></p>
<blockquote>
<h2>v9.3.4</h2>
<h2><a href="https://github.com/testing-library/dom-testing-library/compare/v9.3.3...v9.3.4">9.3.4</a> (2024-01-08)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>Stop calling <code>waitFor</code> callback after timeout (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1271">#1271</a>) (<a href="https://github.com/testing-library/dom-testing-library/commit/9aaf71524beaeafdf9d8b690a4a78867fa50a5d2">9aaf715</a>)</li>
</ul>
<h2>v9.3.3</h2>
<h2><a href="https://github.com/testing-library/dom-testing-library/compare/v9.3.2...v9.3.3">9.3.3</a> (2023-09-17)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>use defineProperty on the error object instead of setting the message directly (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1261">#1261</a>) (<a href="https://github.com/testing-library/dom-testing-library/commit/270a531bcd8bee2ccaaa96a477619f14422faebe">270a531</a>), closes <a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1259">#1259</a></li>
</ul>
<h2>v9.3.2</h2>
<h2><a href="https://github.com/testing-library/dom-testing-library/compare/v9.3.1...v9.3.2">9.3.2</a> (2023-09-17)</h2>
<h3>Bug Fixes</h3>
<ul>
<li><strong>role-helpers:</strong> refine logRoles fn types (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1249">#1249</a>) (<a href="https://github.com/testing-library/dom-testing-library/commit/5e0334390f691366f8bab4123a4d1acd44665dc0">5e03343</a>)</li>
</ul>
<h2>v9.3.1</h2>
<h2><a href="https://github.com/testing-library/dom-testing-library/compare/v9.3.0...v9.3.1">9.3.1</a> (2023-06-14)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>pin aria-query (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1237">#1237</a>) (<a href="https://github.com/testing-library/dom-testing-library/commit/491e930b419c192c405216d169029172697c986c">491e930</a>)</li>
</ul>
<h2>v9.3.0</h2>
<h1><a href="https://github.com/testing-library/dom-testing-library/compare/v9.2.0...v9.3.0">9.3.0</a> (2023-05-12)</h1>
<h3>Features</h3>
<ul>
<li><strong>waitFor:</strong> Support async <code>unstable_advanceTimersWrapper</code> (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1229">#1229</a>) (<a href="https://github.com/testing-library/dom-testing-library/commit/d09b3c25b07486c17603317f4c5a0320c188cbed">d09b3c2</a>)</li>
</ul>
<h2>v9.2.0</h2>
<h1><a href="https://github.com/testing-library/dom-testing-library/compare/v9.1.0...v9.2.0">9.2.0</a> (2023-03-24)</h1>
<h3>Features</h3>
<ul>
<li><strong>ByRole:</strong> Allow filter by value state (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1223">#1223</a>) (<a href="https://github.com/testing-library/dom-testing-library/commit/eadf7485430968df8d1e1293535d78cdbeea20a5">eadf748</a>)</li>
</ul>
<h2>v9.1.0</h2>
<h1><a href="https://github.com/testing-library/dom-testing-library/compare/v9.0.1...v9.1.0">9.1.0</a> (2023-03-24)</h1>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/bd04cf95a1ed85a2238f7dfc1a77d5d16b4f59dc"><code>bd04cf9</code></a> docs: add KevinBon as a contributor for code, and bug (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1284">#1284</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/9aaf71524beaeafdf9d8b690a4a78867fa50a5d2"><code>9aaf715</code></a> fix: Stop calling <code>waitFor</code> callback after timeout (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1271">#1271</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/a7b725257e61370675ee043813003d36fae23e9d"><code>a7b7252</code></a> test: Run with Node.js 20 (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1263">#1263</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/2653fd934f33ce19377c98029efe3e983a1c602b"><code>2653fd9</code></a> docs: add julienw as a contributor for code, and bug (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1266">#1266</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/270a531bcd8bee2ccaaa96a477619f14422faebe"><code>270a531</code></a> fix: use defineProperty on the error object instead of setting the message di...</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/07f59992d6aa1146ab9879b047273d7409b43938"><code>07f5999</code></a> chore: Pin NPM version (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1262">#1262</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/336152be6670d40509f35043e661cde14e4b30ba"><code>336152b</code></a> chore: add accessibility-alt-text-bot (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1240">#1240</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/365d5558f69216439a037e9f796408f901282db4"><code>365d555</code></a> docs: add naorpeled as a contributor for code (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1254">#1254</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/5e0334390f691366f8bab4123a4d1acd44665dc0"><code>5e03343</code></a> fix(role-helpers): refine logRoles fn types (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1249">#1249</a>)</li>
<li><a href="https://github.com/testing-library/dom-testing-library/commit/ab9c3aeee4358cc856c14dbaec8ffc4db8f5ee76"><code>ab9c3ae</code></a> docs: add jlp-craigmorten as a contributor for code (<a href="https://redirect.github.com/testing-library/dom-testing-library/issues/1244">#1244</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/testing-library/dom-testing-library/compare/v8.20.1...v9.3.4">compare view</a></li>
</ul>
</details>
<br />

Updates `@testing-library/jest-dom` from 6.2.0 to 6.4.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/testing-library/jest-dom/releases"><code>@​testing-library/jest-dom</code>'s releases</a>.</em></p>
<blockquote>
<h2>v6.4.2</h2>
<h2><a href="https://github.com/testing-library/jest-dom/compare/v6.4.1...v6.4.2">6.4.2</a> (2024-02-05)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>Remove errant export of GetByRoleMatcher, fixing type checking in some TS configurations (<a href="https://redirect.github.com/testing-library/jest-dom/issues/575">#575</a>) (<a href="https://github.com/testing-library/jest-dom/commit/a93c0c4a20ed4d3a9656261ea6a449d1015b7879">a93c0c4</a>)</li>
</ul>
<h2>v6.4.1</h2>
<h2><a href="https://github.com/testing-library/jest-dom/compare/v6.4.0...v6.4.1">6.4.1</a> (2024-02-01)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>Export type <code>TestingLibraryMatchers</code> from &quot;./matchers&quot; (<a href="https://redirect.github.com/testing-library/jest-dom/issues/576">#576</a>) (<a href="https://github.com/testing-library/jest-dom/commit/dd1c4dd504973efced2f9e02a35e7df3079914af">dd1c4dd</a>)</li>
</ul>
<h2>v6.4.0</h2>
<h1><a href="https://github.com/testing-library/jest-dom/compare/v6.3.0...v6.4.0">6.4.0</a> (2024-01-30)</h1>
<h3>Features</h3>
<ul>
<li>Add toHaveRole matcher (<a href="https://redirect.github.com/testing-library/jest-dom/issues/572">#572</a>) (<a href="https://github.com/testing-library/jest-dom/commit/f7dc673dbc13e508f9867a9eb9c547ce3964b22c">f7dc673</a>)</li>
</ul>
<h2>v6.3.0</h2>
<h1><a href="https://github.com/testing-library/jest-dom/compare/v6.2.1...v6.3.0">6.3.0</a> (2024-01-24)</h1>
<h3>Features</h3>
<ul>
<li>Support for regular expressions in toHaveClass (<a href="https://redirect.github.com/testing-library/jest-dom/issues/563">#563</a>) (<a href="https://github.com/testing-library/jest-dom/commit/9787ed59fcc930e3d33c8a6efe473da3eca01707">9787ed5</a>)</li>
</ul>
<h2>v6.2.1</h2>
<h2><a href="https://github.com/testing-library/jest-dom/compare/v6.2.0...v6.2.1">6.2.1</a> (2024-01-22)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>Standalone types for &quot;./matchers&quot; export and add Bun support (<a href="https://redirect.github.com/testing-library/jest-dom/issues/566">#566</a>) (<a href="https://github.com/testing-library/jest-dom/commit/5675b8668c09345e064001784338a85b7bf9f2af">5675b86</a>)</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/testing-library/jest-dom/commit/a93c0c4a20ed4d3a9656261ea6a449d1015b7879"><code>a93c0c4</code></a> fix: Remove errant export of GetByRoleMatcher, fixing type checking in some T...</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/c5c4e8d4c806caf9b1077dbfd155bd4520d9b02b"><code>c5c4e8d</code></a> docs: add Dennis273 as a contributor for code (<a href="https://redirect.github.com/testing-library/jest-dom/issues/581">#581</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/978e3d4276e5082f79e4033c1347abddc1f3496e"><code>978e3d4</code></a> docs: add kryops as a contributor for bug, code, and test (<a href="https://redirect.github.com/testing-library/jest-dom/issues/580">#580</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/73ad847c7324235faffc441e9c48bc769e5ed9da"><code>73ad847</code></a> docs: add SteKoe as a contributor for bug, and code (<a href="https://redirect.github.com/testing-library/jest-dom/issues/579">#579</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/d829ed9cb834efae9d4c5ee08736dae48b11bcaa"><code>d829ed9</code></a> docs: add jakeboone02 as a contributor for code, and test (<a href="https://redirect.github.com/testing-library/jest-dom/issues/578">#578</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/16499cffca1186eb03fdf01c3631917efbc8621e"><code>16499cf</code></a> docs: add fpapado as a contributor for code, doc, and test (<a href="https://redirect.github.com/testing-library/jest-dom/issues/573">#573</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/dd1c4dd504973efced2f9e02a35e7df3079914af"><code>dd1c4dd</code></a> fix: Export type <code>TestingLibraryMatchers</code> from &quot;./matchers&quot; (<a href="https://redirect.github.com/testing-library/jest-dom/issues/576">#576</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/f7dc673dbc13e508f9867a9eb9c547ce3964b22c"><code>f7dc673</code></a> feat: Add toHaveRole matcher (<a href="https://redirect.github.com/testing-library/jest-dom/issues/572">#572</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/9787ed59fcc930e3d33c8a6efe473da3eca01707"><code>9787ed5</code></a> feat: Support for regular expressions in toHaveClass (<a href="https://redirect.github.com/testing-library/jest-dom/issues/563">#563</a>)</li>
<li><a href="https://github.com/testing-library/jest-dom/commit/5675b8668c09345e064001784338a85b7bf9f2af"><code>5675b86</code></a> fix: Standalone types for &quot;./matchers&quot; export and add Bun support (<a href="https://redirect.github.com/testing-library/jest-dom/issues/566">#566</a>)</li>
<li>See full diff in <a href="https://github.com/testing-library/jest-dom/compare/v6.2.0...v6.4.2">compare view</a></li>
</ul>
</details>
<br />

Updates `@testing-library/react` from 13.4.0 to 14.2.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/testing-library/react-testing-library/releases"><code>@​testing-library/react</code>'s releases</a>.</em></p>
<blockquote>
<h2>v14.2.2</h2>
<h2><a href="https://github.com/testing-library/react-testing-library/compare/v14.2.1...v14.2.2">14.2.2</a> (2024-03-19)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>Remove unused types (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1287">#1287</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/3da62fd9741ca74bcd0d2bc668ba76a2d8f3751f">3da62fd</a>)</li>
</ul>
<h2>v14.2.1</h2>
<h2><a href="https://github.com/testing-library/react-testing-library/compare/v14.2.0...v14.2.1">14.2.1</a> (2024-02-01)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>Update types to support all possible react component return values (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1272">#1272</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/55e79c290d3ec8a8eb3d39539e2c05bf35dff3d9">55e79c2</a>)</li>
</ul>
<h2>v14.2.0</h2>
<h1><a href="https://github.com/testing-library/react-testing-library/compare/v14.1.2...v14.2.0">14.2.0</a> (2024-01-30)</h1>
<h3>Features</h3>
<ul>
<li>add <code>reactStrictMode</code> option to enable strict mode render (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1241">#1241</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/0880eba4a01c030f942ad93600081bbb86eac959">0880eba</a>)</li>
</ul>
<h2>v14.1.2</h2>
<h2><a href="https://github.com/testing-library/react-testing-library/compare/v14.1.1...v14.1.2">14.1.2</a> (2023-11-17)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>revert missing hooks warnings (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1255">#1255</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/1c67477443244e52c3ae57db49e1a6e8226e0c0d">1c67477</a>)</li>
</ul>
<h2>v14.1.1</h2>
<h2><a href="https://github.com/testing-library/react-testing-library/compare/v14.1.0...v14.1.1">14.1.1</a> (2023-11-17)</h2>
<h3>Bug Fixes</h3>
<ul>
<li>log globals warning only once (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1252">#1252</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/fd52a593a7987a14d3cf5c94f112795a1630725d">fd52a59</a>), closes <a href="https://redirect.github.com/testing-library/react-testing-library/issues/1249">#1249</a></li>
</ul>
<h2>v14.1.0</h2>
<h1><a href="https://github.com/testing-library/react-testing-library/compare/v14.0.0...v14.1.0">14.1.0</a> (2023-11-08)</h1>
<h3>Features</h3>
<ul>
<li>add warnings when globals are missing (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1244">#1244</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/d80319f5695d0ddbd93f7d63ca1cb71450663ba6">d80319f</a>)</li>
</ul>
<h2>v14.0.0</h2>
<h1><a href="https://github.com/testing-library/react-testing-library/compare/v13.4.0...v14.0.0">14.0.0</a> (2023-02-16)</h1>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/testing-library/react-testing-library/commit/3da62fd9741ca74bcd0d2bc668ba76a2d8f3751f"><code>3da62fd</code></a> fix: Remove unused types (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1287">#1287</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/7e42f4e84115510f560be36b5febb3d9f20e8899"><code>7e42f4e</code></a> chore: Fix tests (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1288">#1288</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/edb6344d578a8c224daf0cd6e2984f36cc6e8d86"><code>edb6344</code></a> docs: add trappar as a contributor for code (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1273">#1273</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/55e79c290d3ec8a8eb3d39539e2c05bf35dff3d9"><code>55e79c2</code></a> fix: Update types to support all possible react component return values (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1272">#1272</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/4509fb68aaf42f3b750e57a3e2d073a498fc59db"><code>4509fb6</code></a> docs: add yinm as a contributor for code (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1269">#1269</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/0880eba4a01c030f942ad93600081bbb86eac959"><code>0880eba</code></a> feat: add <code>reactStrictMode</code> option to enable strict mode render (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1241">#1241</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/03a301f2488b32c94d6f6f139191f6ff71221944"><code>03a301f</code></a> chore: update stackblitz url in issue template (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1258">#1258</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/1c67477443244e52c3ae57db49e1a6e8226e0c0d"><code>1c67477</code></a> fix: revert missing hooks warnings (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1255">#1255</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/fd52a593a7987a14d3cf5c94f112795a1630725d"><code>fd52a59</code></a> fix: log globals warning only once (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1252">#1252</a>)</li>
<li><a href="https://github.com/testing-library/react-testing-library/commit/d80319f5695d0ddbd93f7d63ca1cb71450663ba6"><code>d80319f</code></a> feat: add warnings when globals are missing (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1244">#1244</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/testing-library/react-testing-library/compare/v13.4.0...v14.2.2">compare view</a></li>
</ul>
</details>
<br />

Updates `@vitejs/plugin-react` from 2.2.0 to 4.2.1
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/vitejs/vite-plugin-react/releases"><code>@​vitejs/plugin-react</code>'s releases</a>.</em></p>
<blockquote>
<h2>v4.2.1</h2>
<p>Remove generic parameter on <code>Plugin</code> to avoid type error with Rollup 4/Vite 5 and <code>skipLibCheck: false</code>.</p>
<p>I expect very few people to currently use this feature, but if you are extending the React plugin via <code>api</code> object, you can get back the typing of the hook by importing <code>ViteReactPluginApi</code>:</p>
<pre lang="ts"><code>import type { Plugin } from 'vite'
import type { ViteReactPluginApi } from '@vitejs/plugin-react'
<p>export const somePlugin: Plugin = {
name: 'some-plugin',
api: {
reactBabel: (babelConfig) =&gt; {
babelConfig.plugins.push('some-babel-plugin')
},
} satisfies ViteReactPluginApi,
}
</code></pre></p>
<h2>v4.2.0</h2>
<h3>Update peer dependency range to target Vite 5</h3>
<p>There were no breaking change that impacted this plugin, so any combination of React plugins and Vite core version will work.</p>
<h3>Align jsx runtime for optimized dependencies</h3>
<p>This will only affect people using internal libraries that contains untranspiled JSX. This change aligns the optimizer with the source code and avoid issues when the published source don't have <code>React</code> in the scope.</p>
<p>Reminder: While being partially supported in Vite, publishing TS &amp; JSX outside of internal libraries is highly discouraged.</p>
<h2>v4.1.1</h2>
<ul>
<li>Enable retainLines to get correct line numbers for jsxDev (fix <a href="https://redirect.github.com/vitejs/vite-plugin-react/issues/235">#235</a>)</li>
</ul>
<h2>v4.1.0</h2>
<ul>
<li>Add <code>@types/babel__cores</code> to dependencies (fix <a href="https://redirect.github.com/vitejs/vite-plugin-react/issues/211">#211</a>)</li>
<li>Improve build perf when not using Babel plugins by lazy loading <code>@babel/core</code> <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/212">#212</a></li>
<li>Better invalidation message when an export is added &amp; fix HMR for export of nullish values <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/215">#215</a></li>
<li>Include non-dev jsx runtime in optimizeDeps &amp; support HMR for JS files using the non dev runtime <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/224">#224</a></li>
<li>The build output now contains a <code>index.d.cts</code> file so you don't get types errors when setting <code>moduleResolution</code> to <code>node16</code> or <code>nodenext</code> in your tsconfig (we recommend using <code>bundler</code> which is more close to how Vite works)</li>
</ul>
<h2>v4.0.4</h2>
<ul>
<li>Fix <a href="https://github.com/vitejs/vite-plugin-react/discussions/198">#198</a>: Enable Babel if presets list is not empty</li>
</ul>
<h2>v4.0.3</h2>
<ul>
<li>Revert <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/108">#108</a>: Remove throw when refresh runtime is loaded twice to enable usage in micro frontend apps. This was added to help fix setup usage, and this is not worth an annoying warning for others or a config parameter.</li>
</ul>
<h2>v4.0.2</h2>
<ul>
<li>Fix fast-refresh for files that are transformed into jsx (<a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/188">#188</a>)</li>
</ul>
<h2>plugin-react@4.0.1</h2>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/CHANGELOG.md"><code>@​vitejs/plugin-react</code>'s changelog</a>.</em></p>
<blockquote>
<h2>4.2.1 (2023-12-04)</h2>
<p>Remove generic parameter on <code>Plugin</code> to avoid type error with Rollup 4/Vite 5 and <code>skipLibCheck: false</code>.</p>
<p>I expect very few people to currently use this feature, but if you are extending the React plugin via <code>api</code> object, you can get back the typing of the hook by importing <code>ViteReactPluginApi</code>:</p>
<pre lang="ts"><code>import type { Plugin } from 'vite'
import type { ViteReactPluginApi } from '@vitejs/plugin-react'
<p>export const somePlugin: Plugin = {
name: 'some-plugin',
api: {
reactBabel: (babelConfig) =&gt; {
babelConfig.plugins.push('some-babel-plugin')
},
} satisfies ViteReactPluginApi,
}
</code></pre></p>
<h2>4.2.0 (2023-11-16)</h2>
<h3>Update peer dependency range to target Vite 5</h3>
<p>There were no breaking change that impacted this plugin, so any combination of React plugins and Vite core version will work.</p>
<h3>Align jsx runtime for optimized dependencies</h3>
<p>This will only affect people using internal libraries that contains untranspiled JSX. This change aligns the optimizer with the source code and avoid issues when the published source don't have <code>React</code> in the scope.</p>
<p>Reminder: While being partially supported in Vite, publishing TS &amp; JSX outside of internal libraries is highly discouraged.</p>
<h2>4.1.1 (2023-11-02)</h2>
<ul>
<li>Enable retainLines to get correct line numbers for jsxDev (fix <a href="https://redirect.github.com/vitejs/vite-plugin-react/issues/235">#235</a>)</li>
</ul>
<h2>4.1.0 (2023-09-24)</h2>
<ul>
<li>Add <code>@types/babel__cores</code> to dependencies (fix <a href="https://redirect.github.com/vitejs/vite-plugin-react/issues/211">#211</a>)</li>
<li>Improve build perf when not using Babel plugins by lazy loading <code>@babel/core</code> <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/212">#212</a></li>
<li>Better invalidation message when an export is added &amp; fix HMR for export of nullish values <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/215">#215</a></li>
<li>Include non-dev jsx runtime in optimizeDeps &amp; support HMR for JS files using the non dev runtime <a href="https://redirect.github.com/vitejs/vite-plugin-react/pull/224">#224</a></li>
<li>The build output now contains a <code>index.d.cts</code> file so you don't get types errors when setting <code>moduleResolution</code> to <code>node16</code> or <code>nodenext</code> in your tsconfig (we recommend using <code>bundler</code> which is more close to how Vite works)</li>
</ul>
<h2>4.0.4 (2023-07-31)</h2>
<ul>
<li>Fix <a href="https://github.com/vitejs/vite-plugin-react/discussions/198">#198</a>: Enable Babel if presets list is not empty</li>
</ul>
<h2>4.0.3 (2023-07-10)</h2>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li>See full diff in <a href="https://github.com/vitejs/vite-plugin-react/commits/v4.2.1/packages/plugin-react">compare view</a></li>
</ul>
</details>
<br />

Updates `@vitest/ui` from 0.22.1 to 1.4.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/vitest-dev/vitest/releases"><code>@​vitest/ui</code>'s releases</a>.</em></p>
<blockquote>
<h2>v1.4.0</h2>
<h3>   🚀 Features</h3>
<ul>
<li>Throw error when using snapshot assertion with <code>not</code>  -  by <a href="https://github.com/fenghan34"><code>@​fenghan34</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5294">vitest-dev/vitest#5294</a> <a href="https://github.com/vitest-dev/vitest/commit/b9d378f5"><!-- raw HTML omitted -->(b9d37)<!-- raw HTML omitted --></a></li>
<li>Add a flag to include test location in tasks  -  by <a href="https://github.com/sheremet-va"><code>@​sheremet-va</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5342">vitest-dev/vitest#5342</a> <a href="https://github.com/vitest-dev/vitest/commit/d627e209"><!-- raw HTML omitted -->(d627e)<!-- raw HTML omitted --></a></li>
<li><strong>cli</strong>:
<ul>
<li>Support wildcards in <code>--project</code> option  -  by <a href="https://github.com/fenghan34"><code>@​fenghan34</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5295">vitest-dev/vitest#5295</a> <a href="https://github.com/vitest-dev/vitest/commit/201bd067"><!-- raw HTML omitted -->(201bd)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>config</strong>:
<ul>
<li>Add <code>shuffle.files</code> and <code>shuffle.tests</code> options  -  by <a href="https://github.com/fenghan34"><code>@​fenghan34</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5281">vitest-dev/vitest#5281</a> <a href="https://github.com/vitest-dev/vitest/commit/356db87b"><!-- raw HTML omitted -->(356db)<!-- raw HTML omitted --></a></li>
<li>Deprecate <code>cache.dir</code> option  -  by <a href="https://github.com/fenghan34"><code>@​fenghan34</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5229">vitest-dev/vitest#5229</a> <a href="https://github.com/vitest-dev/vitest/commit/d7e8b53e"><!-- raw HTML omitted -->(d7e8b)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>coverage</strong>:
<ul>
<li>Support <code>--changed</code> option  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5314">vitest-dev/vitest#5314</a> <a href="https://github.com/vitest-dev/vitest/commit/600b44d6"><!-- raw HTML omitted -->(600b4)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>vitest</strong>:
<ul>
<li>Support <code>clearScreen</code> cli flag  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5241">vitest-dev/vitest#5241</a> <a href="https://github.com/vitest-dev/vitest/commit/e1735fb6"><!-- raw HTML omitted -->(e1735)<!-- raw HTML omitted --></a></li>
</ul>
</li>
</ul>
<h3>   🐞 Bug Fixes</h3>
<ul>
<li>Repeatable <code>--project</code> option  -  by <a href="https://github.com/fenghan34"><code>@​fenghan34</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5265">vitest-dev/vitest#5265</a> <a href="https://github.com/vitest-dev/vitest/commit/d1a06730"><!-- raw HTML omitted -->(d1a06)<!-- raw HTML omitted --></a></li>
<li><code>--inspect-brk</code> to pause before execution  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5355">vitest-dev/vitest#5355</a> <a href="https://github.com/vitest-dev/vitest/commit/e77c553f"><!-- raw HTML omitted -->(e77c5)<!-- raw HTML omitted --></a></li>
<li>Correct locations in test.each tasks  -  by <a href="https://github.com/sheremet-va"><code>@​sheremet-va</code></a> <a href="https://github.com/vitest-dev/vitest/commit/4f6e39c1"><!-- raw HTML omitted -->(4f6e3)<!-- raw HTML omitted --></a></li>
<li><strong>api</strong>:
<ul>
<li>Use resolvedUrls from devserver  -  by <a href="https://github.com/saitonakamura"><code>@​saitonakamura</code></a> and <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5289">vitest-dev/vitest#5289</a> <a href="https://github.com/vitest-dev/vitest/commit/2fef5a7e"><!-- raw HTML omitted -->(2fef5)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>browser</strong>:
<ul>
<li>Add <code>magic-string</code> to <code>optimizeDeps.include</code>  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5278">vitest-dev/vitest#5278</a> <a href="https://github.com/vitest-dev/vitest/commit/8f04e798"><!-- raw HTML omitted -->(8f04e)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>coverage</strong>:
<ul>
<li>Expensive regexp hangs v8 report generation  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5259">vitest-dev/vitest#5259</a> <a href="https://github.com/vitest-dev/vitest/commit/d68a7390"><!-- raw HTML omitted -->(d68a7)<!-- raw HTML omitted --></a></li>
<li>V8 to ignore type-only files  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5328">vitest-dev/vitest#5328</a> <a href="https://github.com/vitest-dev/vitest/commit/c3eb8deb"><!-- raw HTML omitted -->(c3eb8)<!-- raw HTML omitted --></a></li>
<li>Respect source maps of pre-transpiled sources  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5367">vitest-dev/vitest#5367</a> <a href="https://github.com/vitest-dev/vitest/commit/6eda473f"><!-- raw HTML omitted -->(6eda4)<!-- raw HTML omitted --></a></li>
<li>Prevent <code>reportsDirectory</code> from removing user's project  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5376">vitest-dev/vitest#5376</a> <a href="https://github.com/vitest-dev/vitest/commit/07ec3779"><!-- raw HTML omitted -->(07ec3)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>expect</strong>:
<ul>
<li>Show diff on <code>toContain/toMatch</code> assertion error  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5267">vitest-dev/vitest#5267</a> <a href="https://github.com/vitest-dev/vitest/commit/8ee59f0d"><!-- raw HTML omitted -->(8ee59)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>forks</strong>:
<ul>
<li>Wrap <code>defines</code> to support <code>undefined</code> values  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5284">vitest-dev/vitest#5284</a> <a href="https://github.com/vitest-dev/vitest/commit/5b58b399"><!-- raw HTML omitted -->(5b58b)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>typecheck</strong>:
<ul>
<li>Update get-tsconfig 4.7.3 to fix false circularity error  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5384">vitest-dev/vitest#5384</a> <a href="https://github.com/vitest-dev/vitest/commit/bdc371ee"><!-- raw HTML omitted -->(bdc37)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>ui</strong>:
<ul>
<li>Escape html in error diff  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5325">vitest-dev/vitest#5325</a> <a href="https://github.com/vitest-dev/vitest/commit/ab60bf8d"><!-- raw HTML omitted -->(ab60b)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>vitest</strong>:
<ul>
<li>Loosen <code>onConsoleLog</code> return type  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5337">vitest-dev/vitest#5337</a> <a href="https://github.com/vitest-dev/vitest/commit/6d1b1451"><!-- raw HTML omitted -->(6d1b1)<!-- raw HTML omitted --></a></li>
<li>Ensure restoring terminal cursor on close  -  by <a href="https://github.com/hi-ogawa"><code>@​hi-ogawa</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5292">vitest-dev/vitest#5292</a> <a href="https://github.com/vitest-dev/vitest/commit/0bea2247"><!-- raw HTML omitted -->(0bea2)<!-- raw HTML omitted --></a></li>
<li>Ignore timeout on websocket reporter rpc  -  by <a href="https://github.com/sheremet-va"><code>@​sheremet-va</code></a> <a href="https://github.com/vitest-dev/vitest/commit/38119b75"><!-- raw HTML omitted -->(38119)<!-- raw HTML omitted --></a></li>
<li>Correctly override api with --no-api flag  -  by <a href="https://github.com/sheremet-va"><code>@​sheremet-va</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5386">vitest-dev/vitest#5386</a> <a href="https://github.com/vitest-dev/vitest/commit/51d1d472"><!-- raw HTML omitted -->(51d1d)<!-- raw HTML omitted --></a></li>
<li>Logs in <code>beforeAll</code> and <code>afterAll</code>  -  by <a href="https://github.com/fenghan34"><code>@​fenghan34</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5288">vitest-dev/vitest#5288</a> <a href="https://github.com/vitest-dev/vitest/commit/ce5ca6bf"><!-- raw HTML omitted -->(ce5ca)<!-- raw HTML omitted --></a></li>
</ul>
</li>
<li><strong>workspace</strong>:
<ul>
<li>Throw error when browser mode and <code>@vitest/coverage-v8</code> are used  -  by <a href="https://github.com/AriPerkkio"><code>@​AriPerkkio</code></a> in <a href="https://redirect.github.com/vitest-dev/vitest/issues/5250">vitest-dev/vitest#5250</a> <a href="https://github.com/vitest-dev/vitest/commit/29f98cd3"><!-- raw HTML omitted -->(29f98)<!-- raw HTML omitted --></a></li>
</ul>
</li>
</ul>
<h5>    <a href="https://github.com/vitest-dev/vitest/compare/v1.3.1...v1.4.0">View changes on GitHub</a></h5>
<h2>v1.3.1</h2>
<h3>   🚀 Features</h3>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/vitest-dev/vitest/commit/a8da192c61ff0e3adf64b31378546de3b2f4c1bc"><code>a8da192</code></a> chore: release v1.4.0</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/ab60bf8dff46c05bc67194c3cc2a5fa753916609"><code>ab60bf8</code></a> fix(ui): escape html in error diff (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5325">#5325</a>)</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/e5114abd03f8c762a1ea50b96ef42fe50f5b2885"><code>e5114ab</code></a> chore: release v1.3.1</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/5376d5be3e43f281c3700d716ef4a8846fef357e"><code>5376d5b</code></a> fix(ui): auto reload coverage iframe after test run (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5242">#5242</a>)</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/38155548ea6f9054e2621ca022cd8dcbff73c9f3"><code>3815554</code></a> fix: add task tests iteratively (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5235">#5235</a>)</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/bb2af3b03b9b0f03b79644826f807083c6d45f5b"><code>bb2af3b</code></a> chore: release v1.3.0</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/581030eec8dd68047fae719cbc51832fda1c5cde"><code>581030e</code></a> fix(ui): fix tests duration time (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5219">#5219</a>)</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/2ee2317f47414330c8a9b0b6968ff2bb48bb8f7b"><code>2ee2317</code></a> ci: add publish workflow (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5168">#5168</a>)</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/68f51961b21c2e7037f65338ecb3ee0528b3683f"><code>68f5196</code></a> fix: requires fixed version across the monorepo (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5208">#5208</a>)</li>
<li><a href="https://github.com/vitest-dev/vitest/commit/c28b4c2668898e513c7eb8252c6cda3efa71a1de"><code>c28b4c2</code></a> feat(ui): save splitpanes size to local storage (<a href="https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui/issues/5166">#5166</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/vitest-dev/vitest/commits/v1.4.0/packages/ui">compare view</a></li>
</ul>
</details>
<details>
<summary>Maintainer changes</summary>
<p>This version was pushed to npm by <a href="https://www.npmjs.com/~vitestbot">vitestbot</a>, a new releaser for <code>@​vitest/ui</code> since your current version.</p>
</details>
<br />

Updates `jsdom` from 20.0.3 to 24.0.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/jsdom/jsdom/releases">jsdom's releases</a>.</em></p>
<blockquote>
<h2>Version 24.0.0</h2>
<p>This release reverts our selector engine back to <a href="https://www.npmjs.com/nwsapi"><code>nwsapi</code></a>. As discussed in <a href="https://redirect.github.com/jsdom/jsdom/issues/3659">#3659</a>, the performance regressions from <a href="https://www.npmjs.com/package/@asamuzakjp/dom-selector"><code>@asamuzakjp/dom-selector</code></a> turned out to be higher than anticipated. In the future, we can revisit <code>@asamuzakjp/dom-selector</code> after it reaches <code>nwsapi</code>'s performance on the <a href="https://redirect.github.com/jsdom/jsdom/issues/3659#issuecomment-1890852609">two real-world benchmarks provided by the community</a>.</p>
<p>Since reverting to <code>nwsapi</code> causes several functionality regressions, e.g. removing <code>:has()</code> support, we've decided to make this a major version.</p>
<p>Additionally:</p>
<ul>
<li>Small fixes to edge-case behavior of the following properties: <code>input.maxLength</code>, <code>input.minLength</code>, <code>input.size</code>, <code>progress.max</code>, <code>tableCell.colSpan</code>, <code>tableCell.rowSpan</code>, <code>tableCol.span</code>, <code>textArea.cols</code>, <code>textArea.maxLength</code>, <code>textArea.minLength</code>, <code>textArea.rows</code>.</li>
</ul>
<h2>Version 23.2.0</h2>
<p>This release switches our CSS selector engine from <a href="https://www.npmjs.com/nwsapi"><code>nwsapi</code></a> to <a href="https://www.npmjs.com/package/@asamuzakjp/dom-selector"><code>@asamuzakjp/dom-selector</code></a>. The new engine is more actively maintained, and supports many new selectors: see <a href="https://github.com/asamuzaK/domSelector#supported-css-selectors">the package's documentation</a> for the full list. It also works better with shadow trees.</p>
<p>There is a potential of a performance regression due to this change. In our stress test benchmark, which runs most of <a href="https://github.com/jsdom/jsdom/blob/908f27d4e348502a9068f0b335a8518d050ef872/benchmark/selectors/sizzle-speed/selectors.large.css">these 273 selectors</a> against <a href="https://github.com/jsdom/jsdom/blob/908f27d4e348502a9068f0b335a8518d050ef872/benchmark/selectors/sizzle-speed/selector.html">this 128 KiB document</a>, the new engine completes the benchmark only 0.25x as fast. However, we're hopeful that in more moderate usage this will not be a significant issue. Any help speeding up <code>@asamuzakjp/dom-selector</code> is appreciated, and feel free to open an issue if this has had a significant impact on your project.</p>
<h2>Version 23.1.0</h2>
<ul>
<li>Added an initial implementation of <code>ElementInternals</code>, including the <code>shadowRoot</code> getter and the string-valued ARIA properties. (zjffun)</li>
<li>Added the string-valued ARIA attribute-reflecting properties to <code>Element</code>.</li>
<li>Fixed <code>history.pushState()</code> and <code>history.replaceState()</code> to follow the latest specification, notably with regards to how they handle empty string inputs and what new URLs are possible.</li>
<li>Fixed the <code>input.valueAsANumber</code> setter to handle <code>NaN</code> correctly. (alexandertrefz)</li>
<li>Updated various dependencies, including <code>cssstyle</code> which contains several bug fixes.</li>
</ul>
<h2>Version 23.0.1</h2>
<ul>
<li>Fixed the incorrect <code>canvas</code> peer dependency introduced in v23.0.0.</li>
</ul>
<h2>Version 23.0.0</h2>
<ul>
<li>Node.js v18 is now the minimum supported version.</li>
<li>Updated various dependencies, including <code>whatwg-url</code> which integrates various additions to the <code>URL</code> and <code>URLSearchParams</code> objects.</li>
</ul>
<h2>Version 22.1.0</h2>
<ul>
<li>Added <code>crypto.randomUUID()</code>. (jamesbvaughan)</li>
<li>Added <code>DOMRect</code> and <code>DOMRectReadOnly</code>.</li>
<li>Added <code>AbortSignal.timeout()</code>.</li>
<li>Added <code>abortSignal.throwIfAborted()</code>.</li>
<li>Added support for the <code>submitter</code> argument to the <code>FormData</code> constructor. (jenseng)</li>
<li>Improved <code>getComputedStyle()</code>'s results for color-based properties, to resolve named colors and attempt to provide initial inheritance support. (hoekz-wwt)</li>
<li>Updated <code>Window</code>'s event handler properties (e.g. <code>oncopy</code>, <code>ontouchstart</code>, etc.) to reflect the latest list from the standard.</li>
<li>Fixed <code>DOMParser</code>-created documents to inherit their URL from the creating document.</li>
</ul>
<h2>Version 22.0.0</h2>
<ul>
<li>Node.js v16 is now the minimum supported version.</li>
<li>Removed support for running jsdom in the browser via a <a href="https://browserify.org/">browserified</a> bundle. This carried with it too much complexity, especially for our testing infrastructure, and <a href="https://github.com/karma-runner/karma#karma-is-deprecated-and-is-not-accepting-new-features-or-general-bug-fixes">a testing package we relied on was recently deprecated</a>.</li>
</ul>
<h2>Version 21.1.2</h2>
<ul>
<li>Fixed <code>setRangeText()</code> used on <code>&lt;input&gt;</code> and <code>&lt;textarea&gt;</code> elements to calculate the new end index correctly. (pmstss)</li>
<li>Fixed <code>pageX</code>, <code>pageY</code>, <code>offsetX</code>, and <code>offsetY</code> on <code>MouseEvent</code>s during dispatch. (jenseng)</li>
<li>Upgraded <code>nwsapi</code> to v2.2.4, bringing along various fixes to our selector engine.</li>
</ul>
<h2>Version 21.1.1</h2>
<ul>
<li>Fixed <code>jsdom.reconfigure()</code> to also adjust the URL as seen by the history API, so that e.g. <code>history.replaceState(null, &quot;&quot;)</code> would not mess up the URL. (jdufresne)</li>
<li>Fixed <code>location.hash = &quot;&quot;</code> to leave any <code>#</code> in location.href.</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/jsdom/jsdom/blob/main/Changelog.md">jsdom's changelog</a>.</em></p>
<blockquote>
<h2>24.0.0</h2>
<p>This release reverts our selector engine back to <a href="https://www.npmjs.com/nwsapi"><code>nwsapi</code></a>. As discussed in <a href="https://redirect.github.com/jsdom/jsdom/issues/3659">#3659</a>, the performance regressions from <a href="https://www.npmjs.com/package/@asamuzakjp/dom-selector"><code>@asamuzakjp/dom-selector</code></a> turned out to be higher than anticipated. In the future, we can revisit <code>@asamuzakjp/dom-selector</code> after it reaches <code>nwsapi</code>'s performance on the <a href="https://redirect.github.com/jsdom/jsdom/issues/3659#issuecomment-1890852609">two real-world benchmarks provided by the community</a>.</p>
<p>Since reverting to <code>nwsapi</code> causes several functionality regressions, e.g. removing <code>:has()</code> support, we've decided to make this a major version.</p>
<p>Additionally:</p>
<ul>
<li>Small fixes to edge-case behavior of the following properties: <code>input.maxLength</code>, <code>input.minLength</code>, <code>input.size</code>, <code>progress.max</code>, <code>tableCell.colSpan</code>, <code>tableCell.rowSpan</code>, <code>tableCol.span</code>, <code>textArea.cols</code>, <code>textArea.maxLength</code>, <code>textArea.minLength</code>, <code>textArea.rows</code>.</li>
</ul>
<h2>23.2.0</h2>
<p>This release switches our CSS selector engine from <a href="https://www.npmjs.com/nwsapi"><code>nwsapi</code></a> to <a href="https://www.npmjs.com/package/@asamuzakjp/dom-selector"><code>@asamuzakjp/dom-selector</code></a>. The new engine is more actively maintained, and supports many new selectors: see <a href="https://github.com/asamuzaK/domSelector#supported-css-selectors">the package's documentation</a> for the full list. It also works better with shadow trees.</p>
<p>There is a potential of a performance regression due to this change. In our stress test benchmark, which runs most of <a href="https://github.com/jsdom/jsdom/blob/908f27d4e348502a9068f0b335a8518d050ef872/benchmark/selectors/sizzle-speed/selectors.large.css">these 273 selectors</a> against <a href="https://github.com/jsdom/jsdom/blob/908f27d4e348502a9068f0b335a8518d050ef872/benchmark/selectors/sizzle-speed/selector.html">this 128 KiB document</a>, the new engine completes the benchmark only 0.25x as fast. However, we're hopeful that in more moderate usage this will not be a significant issue. Any help speeding up <code>@asamuzakjp/dom-selector</code> is appreciated, and feel free to open an issue if this has had a significant impact on your project.</p>
<h2>23.1.0</h2>
<ul>
<li>Added an initial implementation of <code>ElementInternals</code>, including the <code>shadowRoot</code> getter and the string-valued ARIA properties. (zjffun)</li>
<li>Added the string-valued ARIA attribute-reflecting pr...

_Description has been truncated_

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/208)

----

### PR #203 - #159: align package scripts
##### 2024-03-18

Cleans up the package scripts. Also creates a separate tsconfig for building with tests excluded. This prevents the tests from having a bunch of errors in the IDE (because tests file are checked by the base tsconfig) but those file are not considered when running scripts like build and typecheck to prevent non-essential files from breaking the build.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/203)

----

### PR #197 - #195: Auth0 token refresh redirect
##### 2024-03-13

Redirect to login on token issue. Also add a stub error boundary and throw from app context if primary GQL request fail.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/197)

----

### PR #183 - Create dependabot.yml
##### 2024-03-03

Enable dependabot for web and api packages

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/183)

----

### PR #182 - #181: update Auth0 in web
##### 2024-03-03

Update auth0 dependency in web and use refresh token rotation with cache in localstorage

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/182)

----

### PR #180 - #178: additional lighthouse fixes
##### 2024-03-03

Addresses a number of small lighthouse issues related to meta tags, a11y, sourcemaps etc

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/180)

----

### PR #179 - #178: add robots.txt
##### 2024-03-03

Add a robots.txt to prevent indexing

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/179)

----

### PR #177 - #171: Revert conditional mounting of hover cards, add source map & noindex
##### 2024-03-03

This removes any conditional mounting of hover card elements. Its just flickering and causing too many small DOM shifts. I'm going to stick with the lazy loaded images for now but I'm going to look at some other solutions to prevent too many movie cards from loading immediately on the main page to try and reduce excessive DOM elements that way. This also adds source maps and a noindex directive to try and fix a couple small lighthouse suggestions.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/177)

----

### PR #176 - #171: Keep both posters mounted
##### 2024-03-03

Poster still flickering on mobile. Try keeping both posters mounted only mounting the bottom section of the card on hover.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/176)

----

### PR #175 - #171: revert to preload the detail poster
##### 2024-03-03

The detail poster is still flickering on mobile. Revert the change so its created before being used and memoize it.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/175)

----

### PR #174 - #171: Additional fixes for lazy img
##### 2024-03-03

Put zoomed movie poster back inside the JSX so the extra DOM elements aren't loading initially. The flickering of the poster on zoom was being caused by the cache being disabled in dev tools.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/174)

----

### PR #173 - 171: Additional lazy img fixes
##### 2024-03-03

Fixes the hover state on posters in the add dialog. Also makes sure the hovered image poster on the main grid is loaded before its needed to prevent flickering on hover.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/173)

----

### PR #172 - #171: change to use img lazy
##### 2024-03-02

In my initial tests, I found that using img lazy relies on how the browser determines an img is close enough to the viewport to be loaded. This is making it load more posters than I was with intersection observer. To compare, I took some baseline lighthouse tests with the current version. In those tests I noticed that many extra DOM nodes are also being loaded because of all the invisible hover card states. So this PR also removes those until hover occurs to see if it will cause an issue and to see how it impacts lighthouse.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/172)

----

### PR #170 - #169: fix missing backdrop and add tests
##### 2024-02-26

Fixes a destructuring syntax issue that was causing the backdrop not to be found. Added a couple of tests, which required adding a testid of the background url because a css style can't be tested.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/170)

----

### PR #168 - #167: Fix exception generated by missing runtime section
##### 2024-02-11

- fix exception thrown by empty categories
- prevent rendering empty categories
- update tests

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/168)

----

### PR #166 - #152: remove unused theme config
##### 2024-02-06

Removes colors that were leftover from the old blue design

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/166)

----

### PR #165 - #160: refactor to remove use of sx prop
##### 2024-02-05

Refactors the code to remove the use of the sx prop. I didn't like to "inline" nature of how styles were applied so I moved everything into styled components, usually existing ones that were being augmented by sx.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/165)

----

### PR #164 - #155: fix imports that are type only, clean up the configs
##### 2024-02-03

Cleans up the eslint configs a bit now that the app is converted to typescript, including adding a config for api. Mostly fixes all the imports that were only for types.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/164)

----

### PR #162 - #153: Split list select into separate lists for source and genre
##### 2024-02-03

Split up the list select into two separate components. It was taking too much configuration and there was unneeded complexity in the new design.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/162)

----

### PR #161 - #157: clean up types
##### 2024-02-03

Extract and clean up types, make title a non-nullable field in the schema

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/161)

----

### PR #158 - #150: convert to ts
##### 2024-02-01

Converts the app (web, api and constants) to typescript with type-generation of GraphQL schema.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/158)

----

### PR #151 - #144 - Sort by preferred source order
##### 2023-12-17

Sort using my preferred source order, update the tests

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/151)

----

### PR #149 - #147: Remove delay on touchscreen interfaces
##### 2023-12-10

Sets the debounce delay to 0 on devices that have a touchscreen interface (i.e. mobile).

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/149)

----

### PR #146 - #142: Attempt to fix the poster focus issue
##### 2023-12-10

Trying a small hack to see if it will fix the poster focus issue before going to the next step of lifting the state.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/146)

----

### PR #145 - #143: Backdrop control fixes
##### 2023-12-09

Hide the controls when background can't be changed and fix the close button color to work better on iOS.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/145)

----

### PR #141 - #140: add 5-star rating to update movie response
##### 2023-12-09

Adds the missing 5-star rating to the update movie response which was causing the 5-star rating to become out of sync with the ratings.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/141)

----

### PR #139 - #138: Add sorting by Source value
##### 2023-12-07

Adds a new sort for Source type. The new sort means there are now too many to fit at a couple of breakpoints, particularly mobile size. Rather than try to build an alternative nav presentation at that size, I decided to just hide the Genre sort for now since it is the least used. I may revisit adding it back in the future. I also cleaned up a couple of small bugs here.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/139)

----

### PR #137 - #136: revert requestIdleCallback use
##### 2023-11-11

making a dummy commit because the actual revert went straight to main but I need to make a pull request for it anyway.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/137)

----

### PR #135 - #134: Load images using requestIdleCallback when out of view
##### 2023-11-10

Adds an opt-in flag that loads the poster image during an idle callback if offscreen

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/135)

----

### PR #133 - #132: update display of no genre
##### 2023-10-23



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/133)

----

### PR #131 - #130: fix localization token
##### 2023-10-22

Fix the display case when the genre is undefined or null and add additional tests

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/131)

----

### PR #129 - #128: persist cache to local storage
##### 2023-10-18

Add a persisted cache (saved to local storage) that dramatically speeds up loading on subsequent visits to the site.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/129)

----

### PR #126 - #119: i18n
##### 2023-09-28

Implement localization in the app

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/126)

----

### PR #125 - #124: convert form to react-hook-form
##### 2023-09-09

Re-write the manual movie add/edit for musing react-hook-form

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/125)

----

### PR #123 - #68: Split watched movies from getMovies query
##### 2023-08-30

Removes fetching of the watched movies from the initial query for all movies and also removes watched movies from the context. The watched movies are now only fetched when you go that screen.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/123)

----

### PR #122 - #121: IMDB Id length
##### 2023-08-26

Allow IMDB id's to be minimum, instead of exactly, 7 digits 

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/122)

----

### PR #120 - #115: Fix editing bug
##### 2023-08-26

This bug uncovered some pretty big issues with how the manual movie form was handling state. This refactors the form to create a diff of edits. I've also updated the tests to better cover the use cases.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/120)

----

### PR #118 - #114: Add Tubi as a source
##### 2023-08-12

Add Tubi as a source, refactor auto source updating to consider ad supported streaming services and clarify the logic.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/118)

----

### PR #116 - #112: add auto-updating of source, including tests.
##### 2023-08-08

Adds more functionality to the updateMovie mutation to include determining if the source needs to be changed. Started writing some tests in the API in this PR. The client has been updated to restrict checking more than once a day based on a local storage value per movie.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/116)

----

### PR #113 - #111: cast and director
##### 2023-08-05

Adds the cast and director information to the API and to the full detail screen in the UI.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/113)

----

### PR #110 - #33: list tests
##### 2023-07-29

Add tests for the list component. Also update the c8 coverage dep.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/110)

----

### PR #108 - #107: hooks and utils tests
##### 2023-07-24

Add tests for the utils and hooks. I decided to split up the test-utils from the production utils which generated a lot of import changes.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/108)

----

### PR #106 - #105: update eslint testing rules
##### 2023-07-23

Added vitest and react-testing-library plugins and configured rules, fixed errors

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/106)

----

### PR #103 - #87: Rebuild edit screen
##### 2023-07-22

Rewrite the edit screen to use the same form as the add manual screen. The manual entry form has been extracted up to a shared component and now has image previews. Removed the old add movie dialog that edit was still using and removed dependencies on slick-carousel and react-slick.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/103)

----

### PR #102 - #25: Add Empty Pick State
##### 2023-07-13

add empty pick state, refactor the filtering out into a util so it can be used in the split button.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/102)

----

### PR #101 - #18: Update React Youtube
##### 2023-07-12

update react youtube player to v10.1.0 and update how the size is applied

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/101)

----

### PR #100 - #15: Update react-day-picker version
##### 2023-07-12

Update react day picker version to 8.8.0. Migrate api and tests accordingly.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/100)

----

### PR #99 - #96: intersection observer poster bug
##### 2023-07-10

There was some weird rendering issues with my useIntersectionObserver hook. I think it was a race condition that would sometimes report false for "intersecting" when it should be true because the hook was checking before the component had rendered into the DOM. Just a guess based on some reading but I also noticed that the bug went away when I removed their "key" prop, forcing them to remount/rerender. I ended up trying Rooks' useInViewRef hook to see if it would fix the bug and it did. While I don't want to use Rooks too much, this feature is really important for lighthouse scores and app loading. At some point I could copy Rooks implementation if needed.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/99)

----

### PR #98 - #97: Fix hover issue on positioner
##### 2023-07-09

Fix hover issue by re-adding pointer-events: none and testing with a user event object that has no pointer checks

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/98)

----

### PR #95 - #85: Update readme
##### 2023-07-09

Port the readme from the old project and update the screenshots

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/95)

----

### PR #94 - #90: replace use of import assign with vi.hoisted pattern
##### 2023-07-08

Replaces the old pattern in several files

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/94)

----

### PR #93 - #91: Remove use of query selector and fix search field labels
##### 2023-07-08

When the new add screen was built, I used a query selector to get to the input fields because I couldn't figure out how to assign a label to an MUI textfield without also overwriting the placeholder and displaying the label above the field. I figured out how to do this later. In the same feature, but on the search screen, I used labels on the fields which worked for the tests but I didn't notice how they affected the UI. This PR also fixes that up using the same solution.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/93)

----

### PR #92 - #84: watched toolbar with search
##### 2023-07-08

Adds a toolbar to the watched screen with a search feature. Also displays the counts of movies displayed.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/92)

----

### PR #89 - #83: Rated doesn't fit
##### 2023-07-04

- Add ellipsis for Rated
- Add margin between movie info and source image
- hide rated when "Not Rated"
- update tests

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/89)

----

### PR #88 - 31: redesign add movie dialog
##### 2023-07-04

Complete redesign of the Add Movie function as a new route with a clear separation of searching for a movie and manually creating one.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/88)

----

### PR #82 - #81: fix failing skeleton tests
##### 2023-06-03

Fixes the failing skeleton test which was caused by misunderstanding how the mocked provider works. I was trying to mock it as loading but the correct way to test loading is to render and write assertions without waiting. To test after loading, use await to wait for elements to appear in the DOM. 

Fixing this required removing a hack I had built into my renderWithProviders util that created a short sleep to skip the loading state. I had been specifically hacking my way around being in the loading state instead of correct using await findByX to wait for loading to be completed. This realization caused me to rewrite many things related to tests:

- Remove the sleep from renderWithProviders
- Remove async from renderWithProviders
- Update tests that were relying on that sleep to work without out using await findByX
- Update tests to remove as much use of waitFor as possible in favor of await findByX
- Update tests to use screen.<function> instead of destructuring off the return from render/renderWithProviders
- Update tests to use userEvent instead of fireEvent
- Update test setup to provide a setup user object to all tests through context

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/82)

----

### PR #80 - #79: upgrade add movie
##### 2023-05-23

- Added the ability to use the year as an optional input in support of the title search. 
- Added functionality to fetch additional pages of movies on demand

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/80)

----

### PR #78 - #77: Clean up tests
##### 2023-04-16

Fixed all the warnings I could except for the one about the cache merge. I still haven't been able to find a solution to that one in the unit tests.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/78)

----

### PR #76 - #75: Full detail additional tests
##### 2023-04-15

Add additional tests

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/76)

----

### PR #74 - #73: Add sorted rating tests
##### 2023-04-13

Add tests for the sorted rating component

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/74)

----

### PR #71 - #69: Lazy load poster images
##### 2023-04-13

lazy load poster background images with intersection observer, update tests

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/71)

----

### PR #67 - 64: optimize
##### 2023-04-02



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/67)

----

### PR #66 - 65: add options
##### 2023-04-01



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/66)

----

### PR #62 - #61: Add an option to pick movies based on a maxAdded param
##### 2023-02-15

Adds a new filter to the pick screen called maxAdded. The value is in days and when specified, only movies newer than today minus N days will be included.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/62)

----

### PR #60 - 58: changelog warnings
##### 2023-02-09



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/60)

----

### PR #57 - #56: Fix stuck search
##### 2023-02-08



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/57)

----

### PR #55 - #53: update resolvers
##### 2023-02-03



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/55)

----

### PR #52 - #34: Watched Movie tests
##### 2022-12-23



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/52)

----

### PR #51 - #48: Add required state check for tests and fix broken tests
##### 2022-12-19



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/51)

----

### PR #49 - #47: fix markwatched, standardize omit of fiveStarRating
##### 2022-11-18

Remove the fiveStarRating key when submitting the markWatched mutation

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/49)

----

### PR #46 - #41: nowrap, fix column widths
##### 2022-10-24

Add a nowrap on the runtime and set proper grid column widths

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/46)

----

### PR #45 - #44: loading performance
##### 2022-10-23

Reduce bundle size by rewriting lodash imports to prevent bundling all of lodash, also use a 3D transform on the countdown animation

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/45)

----

### PR #43 - 35/sort by rating
##### 2022-10-23

Add a UI sort option for 5-star rating and update graphql queries to aggregate it from ratings on the server.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/43)

----

### PR #40 - #39: add vercel.json
##### 2022-10-13

Adding a vercel.json with a rewrite rule fixes the issue. I learned about the fix fro a discussion here: https://github.com/orgs/vercel/discussions/261

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/40)

----

### PR #38 - #37: fix sort order
##### 2022-10-13

Fixes the sort ordering

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/38)

----

### PR #36 - 16/sort groups
##### 2022-10-13

Adds react-router 6 and displays custom views for each sort category. Also adds a new sort category to sort by genre.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/36)

----

### PR #32 - 13/poster fallback
##### 2022-09-30

Added a fallback view and aligned all poster images to use one component.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/32)

----

### PR #30 - 28: Organize z-indexes into the theme
##### 2022-09-27

#28

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/30)

----

### PR #29 - 23/app layout
##### 2022-09-27

Fix the position of the title bar which requires some refactoring of the overall layout.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/29)

----

### PR #26 - #24: fix small bugs related to query and pick length
##### 2022-09-24

1. Runtime condition bug fixed
2. Changed to useSearchParams instead of useParams
3. Handled the case where only a single movie exists
4. Redirected to the home screen on error. Filed #25 to address a better UX.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/26)

----

### PR #22 - Issue #21: Fix provider
##### 2022-09-22

convert provider type to Int, destructure from the correct response object

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/22)

----

### PR #20 - Constants package
##### 2022-09-22

Extract overlapping constants into a new monorepo package that both the api and web packages can depend on.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/20)

----

### PR #19 - Migrate/phase 1
##### 2022-09-14

This is a large port of all the existing components, constants, queries, mutations etc from the old app. I'm bringing over everything as JSX files and will work on porting things to typescript incrementally at a later stage.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/19)

----

### PR #4 - add head tag and images
##### 2022-08-28



![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/4)

----