### PR #217 - Bump the production-dependencies group with 24 updates
##### 2024-04-11

Bumps the production-dependencies group with 24 updates:

| Package | From | To |
| --- | --- | --- |
| [dotenv](https://github.com/motdotla/dotenv) | `16.3.1` | `16.4.5` |
| [express](https://github.com/expressjs/express) | `4.18.2` | `4.19.2` |
| [graphql](https://github.com/graphql/graphql-js) | `16.6.0` | `16.8.1` |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | `8.5.1` | `9.0.2` |
| [jwks-rsa](https://github.com/auth0/node-jwks-rsa) | `2.1.5` | `3.1.0` |
| [mongodb](https://github.com/mongodb/node-mongodb-native) | `4.17.2` | `6.5.0` |
| [@apollo/client](https://github.com/apollographql/apollo-client) | `3.8.8` | `3.9.10` |
| [@emotion/react](https://github.com/emotion-js/emotion) | `11.11.3` | `11.11.4` |
| [@emotion/styled](https://github.com/emotion-js/emotion) | `11.11.0` | `11.11.5` |
| [@mui/icons-material](https://github.com/mui/material-ui/tree/HEAD/packages/mui-icons-material) | `5.15.2` | `5.15.15` |
| [@mui/material](https://github.com/mui/material-ui/tree/HEAD/packages/mui-material) | `5.15.2` | `5.15.15` |
| [@mui/styles](https://github.com/mui/material-ui/tree/HEAD/packages/mui-styles) | `5.15.2` | `5.15.15` |
| [apollo3-cache-persist](https://github.com/apollographql/apollo-cache-persist) | `0.14.1` | `0.15.0` |
| [date-fns](https://github.com/date-fns/date-fns) | `2.30.0` | `3.6.0` |
| [i18next](https://github.com/i18next/i18next) | `23.7.11` | `23.10.1` |
| [intl-messageformat](https://github.com/formatjs/formatjs) | `10.5.8` | `10.5.11` |
| [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) | `7.7.0` | `7.8.0` |
| [react-day-picker](https://github.com/gpbl/react-day-picker) | `8.8.0` | `8.10.0` |
| [react-hook-form](https://github.com/react-hook-form/react-hook-form) | `7.49.2` | `7.51.2` |
| [react-i18next](https://github.com/i18next/react-i18next) | `13.5.0` | `14.1.0` |
| [react-router-dom](https://github.com/remix-run/react-router/tree/HEAD/packages/react-router-dom) | `6.10.0` | `6.22.3` |
| [rooks](https://github.com/imbhargav5/rooks) | `5.14.1` | `7.14.1` |
| [uuid](https://github.com/uuidjs/uuid) | `8.3.2` | `9.0.1` |
| [@types/uuid](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/uuid) | `9.0.7` | `9.0.8` |

Updates `dotenv` from 16.3.1 to 16.4.5
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md">dotenv's changelog</a>.</em></p>
<blockquote>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.4.4...v16.4.5">16.4.5</a> (2024-02-19)</h2>
<h3>Changed</h3>
<ul>
<li>🐞 fix recent regression when using <code>path</code> option. return to historical behavior: do not attempt to auto find <code>.env</code> if <code>path</code> set. (regression was introduced in <code>16.4.3</code>) <a href="https://redirect.github.com/motdotla/dotenv/pull/814">#814</a></li>
</ul>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.4.3...v16.4.4">16.4.4</a> (2024-02-13)</h2>
<h3>Changed</h3>
<ul>
<li>🐞 Replaced chaining operator <code>?.</code> with old school <code>&amp;&amp;</code> (fixing node 12 failures) <a href="https://redirect.github.com/motdotla/dotenv/pull/812">#812</a></li>
</ul>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.4.2...v16.4.3">16.4.3</a> (2024-02-12)</h2>
<h3>Changed</h3>
<ul>
<li>Fixed processing of multiple files in <code>options.path</code> <a href="https://redirect.github.com/motdotla/dotenv/pull/805">#805</a></li>
</ul>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.4.1...v16.4.2">16.4.2</a> (2024-02-10)</h2>
<h3>Changed</h3>
<ul>
<li>Changed funding link in package.json to <a href="https://dotenvx.com"><code>dotenvx.com</code></a></li>
</ul>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.4.0...v16.4.1">16.4.1</a> (2024-01-24)</h2>
<ul>
<li>Patch support for array as <code>path</code> option <a href="https://redirect.github.com/motdotla/dotenv/pull/797">#797</a></li>
</ul>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.3.2...v16.4.0">16.4.0</a> (2024-01-23)</h2>
<ul>
<li>Add <code>error.code</code> to error messages around <code>.env.vault</code> decryption handling <a href="https://redirect.github.com/motdotla/dotenv/pull/795">#795</a></li>
<li>Add ability to find <code>.env.vault</code> file when filename(s) passed as an array <a href="https://redirect.github.com/motdotla/dotenv/pull/784">#784</a></li>
</ul>
<h2><a href="https://github.com/motdotla/dotenv/compare/v16.3.1...v16.3.2">16.3.2</a> (2024-01-18)</h2>
<h3>Added</h3>
<ul>
<li>Add debug message when no encoding set <a href="https://redirect.github.com/motdotla/dotenv/pull/735">#735</a></li>
</ul>
<h3>Changed</h3>
<ul>
<li>Fix output typing for <code>populate</code> <a href="https://redirect.github.com/motdotla/dotenv/pull/792">#792</a></li>
<li>Use subarray instead of slice <a href="https://redirect.github.com/motdotla/dotenv/pull/793">#793</a></li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/motdotla/dotenv/commit/9f3e83352ec6ba912161748a2fd15b07829430e2"><code>9f3e833</code></a> 16.4.5</li>
<li><a href="https://github.com/motdotla/dotenv/commit/69241772b6f37af8e388f61916334d84ec0deeb7"><code>6924177</code></a> Merge pull request <a href="https://redirect.github.com/motdotla/dotenv/issues/814">#814</a> from motdotla/dont-check-existance</li>
<li><a href="https://github.com/motdotla/dotenv/commit/353342048cae3621f8abb3a23e00af880ab2c69f"><code>3533420</code></a> changelog 🪵</li>
<li><a href="https://github.com/motdotla/dotenv/commit/249e5a64f612d59aaac74f594f951024490d9765"><code>249e5a6</code></a> adjust logic to support tests</li>
<li><a href="https://github.com/motdotla/dotenv/commit/87fd887e31b913d334ef820f27737d80b28389ee"><code>87fd887</code></a> do not check if exists</li>
<li><a href="https://github.com/motdotla/dotenv/commit/1146910932ed1dd19c2c6506f7fc6373047c1321"><code>1146910</code></a> rename .env-multiline to .env.multiline</li>
<li><a href="https://github.com/motdotla/dotenv/commit/d03e39794ac29aa7e7fde20492b0b8c51544d9d7"><code>d03e397</code></a> 16.4.4</li>
<li><a href="https://github.com/motdotla/dotenv/commit/3275a0a940a8560bc42e93b5a814cea23b3dae38"><code>3275a0a</code></a> changelog 🪵</li>
<li><a href="https://github.com/motdotla/dotenv/commit/f40a8c3e3519ba9dca3014ff47541f276f90420a"><code>f40a8c3</code></a> Merge pull request <a href="https://redirect.github.com/motdotla/dotenv/issues/812">#812</a> from motdotla/patch-12</li>
<li><a href="https://github.com/motdotla/dotenv/commit/1dc22d312fc641c9384fcec4b8181d089e37de8c"><code>1dc22d3</code></a> replace 14 chaining operator</li>
<li>Additional commits viewable in <a href="https://github.com/motdotla/dotenv/compare/v16.3.1...v16.4.5">compare view</a></li>
</ul>
</details>
<br />

Updates `express` from 4.18.2 to 4.19.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/expressjs/express/releases">express's releases</a>.</em></p>
<blockquote>
<h2>4.19.2</h2>
<h2>What's Changed</h2>
<ul>
<li><a href="https://github.com/expressjs/express/commit/0b746953c4bd8e377123527db11f9cd866e39f94">Improved fix for open redirect allow list bypass</a></li>
</ul>
<p><strong>Full Changelog</strong>: <a href="https://github.com/expressjs/express/compare/4.19.1...4.19.2">https://github.com/expressjs/express/compare/4.19.1...4.19.2</a></p>
<h2>4.19.1</h2>
<h2>What's Changed</h2>
<ul>
<li>Fix ci after location patch by <a href="https://github.com/wesleytodd"><code>@​wesleytodd</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5552">expressjs/express#5552</a></li>
<li>fixed un-edited version in history.md for 4.19.0 by <a href="https://github.com/wesleytodd"><code>@​wesleytodd</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5556">expressjs/express#5556</a></li>
</ul>
<p><strong>Full Changelog</strong>: <a href="https://github.com/expressjs/express/compare/4.19.0...4.19.1">https://github.com/expressjs/express/compare/4.19.0...4.19.1</a></p>
<h2>4.19.0</h2>
<h2>What's Changed</h2>
<ul>
<li>fix typo in release date by <a href="https://github.com/UlisesGascon"><code>@​UlisesGascon</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5527">expressjs/express#5527</a></li>
<li>docs: nominating <a href="https://github.com/wesleytodd"><code>@​wesleytodd</code></a> to be project captian by <a href="https://github.com/wesleytodd"><code>@​wesleytodd</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5511">expressjs/express#5511</a></li>
<li>docs: loosen TC activity rules by <a href="https://github.com/wesleytodd"><code>@​wesleytodd</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5510">expressjs/express#5510</a></li>
<li>Add note on how to update docs for new release by <a href="https://github.com/crandmck"><code>@​crandmck</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5541">expressjs/express#5541</a></li>
<li><a href="https://redirect.github.com/expressjs/express/pull/5551/commits/660ccf5fa33dd0baab069e5c8ddd9ffe7d8bbff1">Prevent open redirect allow list bypass due to encodeurl</a></li>
<li>Release 4.19.0 by <a href="https://github.com/wesleytodd"><code>@​wesleytodd</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5551">expressjs/express#5551</a></li>
</ul>
<h2>New Contributors</h2>
<ul>
<li><a href="https://github.com/crandmck"><code>@​crandmck</code></a> made their first contribution in <a href="https://redirect.github.com/expressjs/express/pull/5541">expressjs/express#5541</a></li>
</ul>
<p><strong>Full Changelog</strong>: <a href="https://github.com/expressjs/express/compare/4.18.3...4.19.0">https://github.com/expressjs/express/compare/4.18.3...4.19.0</a></p>
<h2>4.18.3</h2>
<h2>Main Changes</h2>
<ul>
<li>Fix routing requests without method</li>
<li>deps: body-parser@1.20.2
<ul>
<li>Fix strict json error message on Node.js 19+</li>
<li>deps: content-type@~1.0.5</li>
<li>deps: raw-body@2.5.2</li>
</ul>
</li>
</ul>
<h2>Other Changes</h2>
<ul>
<li>Use https: protocol instead of deprecated git: protocol by <a href="https://github.com/vcsjones"><code>@​vcsjones</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5032">expressjs/express#5032</a></li>
<li>build: Node.js@16.18 and Node.js@18.12 by <a href="https://github.com/abenhamdine"><code>@​abenhamdine</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5034">expressjs/express#5034</a></li>
<li>ci: update actions/checkout to v3 by <a href="https://github.com/armujahid"><code>@​armujahid</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5027">expressjs/express#5027</a></li>
<li>test: remove unused function arguments in params by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5124">expressjs/express#5124</a></li>
<li>Remove unused originalIndex from acceptParams by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5119">expressjs/express#5119</a></li>
<li>Fixed typos by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5117">expressjs/express#5117</a></li>
<li>examples: remove unused params by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5113">expressjs/express#5113</a></li>
<li>fix: parameter str is not described in JSDoc by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5130">expressjs/express#5130</a></li>
<li>fix: typos in History.md by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5131">expressjs/express#5131</a></li>
<li>build : add Node.js@19.7 by <a href="https://github.com/abenhamdine"><code>@​abenhamdine</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5028">expressjs/express#5028</a></li>
<li>test: remove unused function arguments in params by <a href="https://github.com/raksbisht"><code>@​raksbisht</code></a> in <a href="https://redirect.github.com/expressjs/express/pull/5137">expressjs/express#5137</a></li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/expressjs/express/blob/master/History.md">express's changelog</a>.</em></p>
<blockquote>
<h1>4.19.2 / 2024-03-25</h1>
<ul>
<li>Improved fix for open redirect allow list bypass</li>
</ul>
<h1>4.19.1 / 2024-03-20</h1>
<ul>
<li>Allow passing non-strings to res.location with new encoding handling checks</li>
</ul>
<h1>4.19.0 / 2024-03-20</h1>
<ul>
<li>Prevent open redirect allow list bypass due to encodeurl</li>
<li>deps: cookie@0.6.0</li>
</ul>
<h1>4.18.3 / 2024-02-29</h1>
<ul>
<li>Fix routing requests without method</li>
<li>deps: body-parser@1.20.2
<ul>
<li>Fix strict json error message on Node.js 19+</li>
<li>deps: content-type@~1.0.5</li>
<li>deps: raw-body@2.5.2</li>
</ul>
</li>
<li>deps: cookie@0.6.0
<ul>
<li>Add <code>partitioned</code> option</li>
</ul>
</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/expressjs/express/commit/04bc62787be974874bc1467b23606c36bc9779ba"><code>04bc627</code></a> 4.19.2</li>
<li><a href="https://github.com/expressjs/express/commit/da4d763ff6ba9df6dbd8f1f0b1d05412dda934d5"><code>da4d763</code></a> Improved fix for open redirect allow list bypass</li>
<li><a href="https://github.com/expressjs/express/commit/4f0f6cc67d531431c096ea006c2191b92931bbc3"><code>4f0f6cc</code></a> 4.19.1</li>
<li><a href="https://github.com/expressjs/express/commit/a003cfab034fbadb1c78ae337ee8ab389adda217"><code>a003cfa</code></a> Allow passing non-strings to res.location with new encoding handling checks f...</li>
<li><a href="https://github.com/expressjs/express/commit/a1fa90fcea7d8e844e1c9938ad095d62669c3abd"><code>a1fa90f</code></a> fixed un-edited version in history.md for 4.19.0</li>
<li><a href="https://github.com/expressjs/express/commit/11f2b1db227fd42c2508c427032c1ec671b306be"><code>11f2b1d</code></a> build: fix build due to inconsistent supertest behavior in older versions</li>
<li><a href="https://github.com/expressjs/express/commit/084e36506a18774f85206a65d8da04dc1107fc1b"><code>084e365</code></a> 4.19.0</li>
<li><a href="https://github.com/expressjs/express/commit/0867302ddbde0e9463d0564fea5861feb708c2dd"><code>0867302</code></a> Prevent open redirect allow list bypass due to encodeurl</li>
<li><a href="https://github.com/expressjs/express/commit/567c9c665d0de4c344b8e160146050770233783c"><code>567c9c6</code></a> Add note on how to update docs for new release (<a href="https://redirect.github.com/expressjs/express/issues/5541">#5541</a>)</li>
<li><a href="https://github.com/expressjs/express/commit/69a4cf2819c4449ec6ea45649691fb43a528d5d1"><code>69a4cf2</code></a> deps: cookie@0.6.0</li>
<li>Additional commits viewable in <a href="https://github.com/expressjs/express/compare/4.18.2...4.19.2">compare view</a></li>
</ul>
</details>
<details>
<summary>Maintainer changes</summary>
<p>This version was pushed to npm by <a href="https://www.npmjs.com/~wesleytodd">wesleytodd</a>, a new releaser for express since your current version.</p>
</details>
<br />

Updates `graphql` from 16.6.0 to 16.8.1
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/graphql/graphql-js/releases">graphql's releases</a>.</em></p>
<blockquote>
<h2>v16.8.1 (2023-09-19)</h2>
<h4>Bug Fix 🐞</h4>
<ul>
<li><a href="https://redirect.github.com/graphql/graphql-js/pull/3967">#3967</a> OverlappingFieldsCanBeMergedRule: Fix performance degradation (<a href="https://github.com/AaronMoat"><code>@​AaronMoat</code></a>)</li>
</ul>
<h4>Committers: 1</h4>
<ul>
<li>Aaron Moat(<a href="https://github.com/AaronMoat"><code>@​AaronMoat</code></a>)</li>
</ul>
<h2>v16.8.0 (2023-08-14)</h2>
<h4>New Feature 🚀</h4>
<ul>
<li><a href="https://redirect.github.com/graphql/graphql-js/pull/3950">#3950</a> Support fourfold nested lists (<a href="https://github.com/gschulze"><code>@​gschulze</code></a>)</li>
</ul>
<h4>Committers: 1</h4>
<ul>
<li>Gunnar Schulze(<a href="https://github.com/gschulze"><code>@​gschulze</code></a>)</li>
</ul>
<h2>v16.7.1 (2023-06-22)</h2>
<p>:loudspeaker: Big shout out to <a href="https://github.com/phryneas"><code>@​phryneas</code></a>, who managed to reproduce this issue and come up with this fix.</p>
<h4>Bug Fix 🐞</h4>
<ul>
<li><a href="https://redirect.github.com/graphql/graphql-js/pull/3923">#3923</a> instanceOf: workaround bundler issue with <code>process.env</code> (<a href="https://github.com/IvanGoncharov"><code>@​IvanGoncharov</code></a>)</li>
</ul>
<h4>Committers: 1</h4>
<ul>
<li>Ivan Goncharov(<a href="https://github.com/IvanGoncharov"><code>@​IvanGoncharov</code></a>)</li>
</ul>
<h2>v16.7.0 (2023-06-21)</h2>
<h4>New Feature 🚀</h4>
<ul>
<li><a href="https://redirect.github.com/graphql/graphql-js/pull/3887">#3887</a> check &quot;globalThis.process&quot; before accessing it (<a href="https://github.com/kettanaito"><code>@​kettanaito</code></a>)</li>
</ul>
<h4>Bug Fix 🐞</h4>
<ul>
<li><a href="https://redirect.github.com/graphql/graphql-js/pull/3707">#3707</a> Fix crash in node when mixing sync/async resolvers (backport of <a href="https://redirect.github.com/graphql/graphql-js/issues/3706">#3706</a>) (<a href="https://github.com/chrskrchr"><code>@​chrskrchr</code></a>)</li>
<li><a href="https://redirect.github.com/graphql/graphql-js/pull/3838">#3838</a> Fix/invalid error propagation custom scalars (backport for 16.x.x) (<a href="https://github.com/stenreijers"><code>@​stenreijers</code></a>)</li>
</ul>
<h4>Committers: 3</h4>
<ul>
<li>Artem Zakharchenko(<a href="https://github.com/kettanaito"><code>@​kettanaito</code></a>)</li>
<li>Chris Karcher(<a href="https://github.com/chrskrchr"><code>@​chrskrchr</code></a>)</li>
<li>Sten Reijers(<a href="https://github.com/stenreijers"><code>@​stenreijers</code></a>)</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/graphql/graphql-js/commit/8a95335f545024c09abfa0f07cc326f73a0e466f"><code>8a95335</code></a> 16.8.1</li>
<li><a href="https://github.com/graphql/graphql-js/commit/8f4c64eb6a7112a929ffeef00caa67529b3f2fcf"><code>8f4c64e</code></a> OverlappingFieldsCanBeMergedRule: Fix performance degradation (<a href="https://redirect.github.com/graphql/graphql-js/issues/3967">#3967</a>)</li>
<li><a href="https://github.com/graphql/graphql-js/commit/e4f759dba1a9b19c8a189b803657ee4abe0efe11"><code>e4f759d</code></a> 16.8.0</li>
<li><a href="https://github.com/graphql/graphql-js/commit/bec1b497fdfba69937b958e80676b585124bf0c5"><code>bec1b49</code></a> Support fourfold nested lists (<a href="https://redirect.github.com/graphql/graphql-js/issues/3950">#3950</a>)</li>
<li><a href="https://github.com/graphql/graphql-js/commit/bf6a9f0e1cc8721de6675fb7bff470137635266f"><code>bf6a9f0</code></a> 16.7.1</li>
<li><a href="https://github.com/graphql/graphql-js/commit/a08aaeea584a326c7d1a40cbcbd1b28b64c4e08c"><code>a08aaee</code></a> instanceOf: workaround bundler issue with <code>process.env</code> (<a href="https://redirect.github.com/graphql/graphql-js/issues/3923">#3923</a>)</li>
<li><a href="https://github.com/graphql/graphql-js/commit/1519fda27376bcdd26b433aecfb9e7b485da71f8"><code>1519fda</code></a> 16.7.0</li>
<li><a href="https://github.com/graphql/graphql-js/commit/84bb146e644e78ba75faf0ba173de9b4434807c5"><code>84bb146</code></a> check &quot;globalThis.process&quot; before accessing it (<a href="https://redirect.github.com/graphql/graphql-js/issues/3887">#3887</a>)</li>
<li><a href="https://github.com/graphql/graphql-js/commit/076972e9c1944c9fe43a42046ed9d8be08d974dc"><code>076972e</code></a> Fix/invalid error propagation custom scalars (backport for 16.x.x) (<a href="https://redirect.github.com/graphql/graphql-js/issues/3838">#3838</a>)</li>
<li><a href="https://github.com/graphql/graphql-js/commit/4a82557ae6d3b3c6cd72bcd528254296ecf7e9e8"><code>4a82557</code></a> Fix crash in node when mixing sync/async resolvers (backport of <a href="https://redirect.github.com/graphql/graphql-js/issues/3706">#3706</a>) (<a href="https://redirect.github.com/graphql/graphql-js/issues/3707">#3707</a>)</li>
<li>See full diff in <a href="https://github.com/graphql/graphql-js/compare/v16.6.0...v16.8.1">compare view</a></li>
</ul>
</details>
<br />

Updates `jsonwebtoken` from 8.5.1 to 9.0.2
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/auth0/node-jsonwebtoken/blob/master/CHANGELOG.md">jsonwebtoken's changelog</a>.</em></p>
<blockquote>
<h2>9.0.2 - 2023-08-30</h2>
<ul>
<li>security: updating semver to 7.5.4 to resolve CVE-2022-25883, closes <a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/921">#921</a>.</li>
<li>refactor: reduce library size by using lodash specific dependencies, closes <a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/878">#878</a>.</li>
</ul>
<h2>9.0.1 - 2023-07-05</h2>
<ul>
<li>fix(stubs): allow decode method to be stubbed</li>
</ul>
<h2>9.0.0 - 2022-12-21</h2>
<p><strong>Breaking changes: See <a href="https://github.com/auth0/node-jsonwebtoken/wiki/Migration-Notes:-v8-to-v9">Migration from v8 to v9</a></strong></p>
<h3>Breaking changes</h3>
<ul>
<li>Removed support for Node versions 11 and below.</li>
<li>The verify() function no longer accepts unsigned tokens by default. ([834503079514b72264fd13023a3b8d648afd6a16]<a href="https://github.com/auth0/node-jsonwebtoken/commit/834503079514b72264fd13023a3b8d648afd6a16">https://github.com/auth0/node-jsonwebtoken/commit/834503079514b72264fd13023a3b8d648afd6a16</a>)</li>
<li>RSA key size must be 2048 bits or greater. ([ecdf6cc6073ea13a7e71df5fad043550f08d0fa6]<a href="https://github.com/auth0/node-jsonwebtoken/commit/ecdf6cc6073ea13a7e71df5fad043550f08d0fa6">https://github.com/auth0/node-jsonwebtoken/commit/ecdf6cc6073ea13a7e71df5fad043550f08d0fa6</a>)</li>
<li>Key types must be valid for the signing / verification algorithm</li>
</ul>
<h3>Security fixes</h3>
<ul>
<li>security: fixes <code>Arbitrary File Write via verify function</code> - CVE-2022-23529</li>
<li>security: fixes <code>Insecure default algorithm in jwt.verify() could lead to signature validation bypass</code> - CVE-2022-23540</li>
<li>security: fixes <code>Insecure implementation of key retrieval function could lead to Forgeable Public/Private Tokens from RSA to HMAC</code> - CVE-2022-23541</li>
<li>security: fixes <code>Unrestricted key type could lead to legacy keys usage</code> - CVE-2022-23539</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/bc28861f1fa981ed9c009e29c044a19760a0b128"><code>bc28861</code></a> Release 9.0.2  (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/935">#935</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/96b89060cfc19272a7d853f53cb28c42580a6a67"><code>96b8906</code></a> refactor: use specific lodash packages (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/933">#933</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/ed35062239c0195d4341025d4699cc39608b435e"><code>ed35062</code></a> security: Updating semver to 7.5.4 to resolve CVE-2022-25883 (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/932">#932</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/84539b29e17fd40ed25c53fc28db8ae41a34aff8"><code>84539b2</code></a> Updating package version to 9.0.1 (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/920">#920</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/a99fd4b473e257c2f50ff69c716db1c520bf9a78"><code>a99fd4b</code></a> fix(stubs): allow decode method to be stubbed (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/876">#876</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/e1fa9dcc12054a8681db4e6373da1b30cf7016e3"><code>e1fa9dc</code></a> Merge pull request from GHSA-8cf7-32gw-wr33</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/5eaedbf2b01676d952336e73b4d2efba847d2d1b"><code>5eaedbf</code></a> chore(ci): remove github test actions job (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/861">#861</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/cd4163eb1407aab0b3148f91b0b9c26276b96c6b"><code>cd4163e</code></a> chore(ci): configure Github Actions jobs for Tests &amp; Security Scanning (<a href="https://redirect.github.com/auth0/node-jsonwebtoken/issues/856">#856</a>)</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/ecdf6cc6073ea13a7e71df5fad043550f08d0fa6"><code>ecdf6cc</code></a> fix!: Prevent accidental use of insecure key sizes &amp; misconfiguration of secr...</li>
<li><a href="https://github.com/auth0/node-jsonwebtoken/commit/834503079514b72264fd13023a3b8d648afd6a16"><code>8345030</code></a> fix(sign&amp;verify)!: Remove default <code>none</code> support from <code>sign</code> and <code>verify</code> met...</li>
<li>Additional commits viewable in <a href="https://github.com/auth0/node-jsonwebtoken/compare/v8.5.1...v9.0.2">compare view</a></li>
</ul>
</details>
<details>
<summary>Maintainer changes</summary>
<p>This version was pushed to npm by <a href="https://www.npmjs.com/~charlesrea">charlesrea</a>, a new releaser for jsonwebtoken since your current version.</p>
</details>
<br />

Updates `jwks-rsa` from 2.1.5 to 3.1.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/auth0/node-jwks-rsa/releases">jwks-rsa's releases</a>.</em></p>
<blockquote>
<h2>v3.1.0</h2>
<p><strong>Added</strong></p>
<ul>
<li>feat: resolve bun/deno compat issues <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/374">#374</a> (<a href="https://github.com/panva">panva</a>)</li>
</ul>
<h2>v3.0.1</h2>
<p><strong>Fixed</strong></p>
<ul>
<li>update types/jsonwebtoken update v9.0.0 <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/349">#349</a> (<a href="https://github.com/ToshihitoKon">ToshihitoKon</a>)</li>
<li>Bump jsonwebtoken from 8.5.1 to 9.0.0 <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/344">#344</a> (<a href="https://github.com/apps/dependabot">dependabot[bot]</a>)</li>
</ul>
<h2>v3.0.0</h2>
<p><strong>⚠️ BREAKING CHANGES</strong></p>
<p>This release drops support for Node 10 and 12</p>
<ul>
<li>[major] bump jose <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/333">#333</a> (<a href="https://github.com/panva">panva</a>)</li>
</ul>
</blockquote>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/auth0/node-jwks-rsa/blob/master/CHANGELOG.md">jwks-rsa's changelog</a>.</em></p>
<blockquote>
<h2><a href="https://github.com/auth0/node-jwks-rsa/tree/v3.1.0">v3.1.0</a> (2023-10-05)</h2>
<p><a href="https://github.com/auth0/node-jwks-rsa/compare/v3.0.1...v3.1.0">Full Changelog</a></p>
<p><strong>Added</strong></p>
<ul>
<li>feat: resolve bun/deno compat issues <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/374">#374</a> (<a href="https://github.com/panva">panva</a>)</li>
</ul>
<h2><a href="https://github.com/auth0/node-jwks-rsa/tree/v3.0.1">v3.0.1</a> (2023-01-12)</h2>
<p><a href="https://github.com/auth0/node-jwks-rsa/compare/v3.0.0...v3.0.1">Full Changelog</a></p>
<p><strong>Fixed</strong></p>
<ul>
<li>update types/jsonwebtoken update v9.0.0 <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/349">#349</a> (<a href="https://github.com/ToshihitoKon">ToshihitoKon</a>)</li>
<li>Bump jsonwebtoken from 8.5.1 to 9.0.0 <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/344">#344</a> (<a href="https://github.com/apps/dependabot">dependabot[bot]</a>)</li>
</ul>
<h2><a href="https://github.com/auth0/node-jwks-rsa/tree/v3.0.0">v3.0.0</a> (2022-11-01)</h2>
<p><a href="https://github.com/auth0/node-jwks-rsa/compare/v2.1.5...v3.0.0">Full Changelog</a></p>
<p><strong>⚠️ BREAKING CHANGES</strong></p>
<p>This release drops support for Node 10 and 12</p>
<ul>
<li>[major] bump jose <a href="https://redirect.github.com/auth0/node-jwks-rsa/pull/333">#333</a> (<a href="https://github.com/panva">panva</a>)</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/115b545354f75ef1d178202c133ff8c354280970"><code>115b545</code></a> Add reg url to fix publishing (<a href="https://redirect.github.com/auth0/node-jwks-rsa/issues/377">#377</a>)</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/d1c1520240b39768128dd1b3657d8e1af2cc9a87"><code>d1c1520</code></a> Add reg url to fix publishing</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/52ae0b629ee232515953243b18dd3eaa978faddb"><code>52ae0b6</code></a> Release v3.1.0 (<a href="https://redirect.github.com/auth0/node-jwks-rsa/issues/376">#376</a>)</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/1b73f4a5d48afe009d14e1453dd233a071d5aae5"><code>1b73f4a</code></a> Release v3.1.0</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/c14d857c3d638e4bd2d0e4edf346e09f0f414f37"><code>c14d857</code></a> fix resolve bun/deno compat issues (<a href="https://redirect.github.com/auth0/node-jwks-rsa/issues/374">#374</a>)</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/5e9f786fcd2b86a4c634fba1c58d9dcd2c533351"><code>5e9f786</code></a> feat: resolve bun compat issues</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/2d7af059f674c093415bf7fa0b46368ef05bc935"><code>2d7af05</code></a> test: Migrate CI to GitHub Actions [SDK-4451] (<a href="https://redirect.github.com/auth0/node-jwks-rsa/issues/372">#372</a>)</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/f1241b7dfc81f139102ff24bafec2eea602e4d3c"><code>f1241b7</code></a> Fix linting step</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/b9fbbac2d9ec90ff0a40fc1a57180efe9dbd088b"><code>b9fbbac</code></a> Update test.yml</li>
<li><a href="https://github.com/auth0/node-jwks-rsa/commit/24a1e38920ccf890368f1b14ddd2c23a973e9a8e"><code>24a1e38</code></a> Update publish.yml</li>
<li>Additional commits viewable in <a href="https://github.com/auth0/node-jwks-rsa/compare/v2.1.5...v3.1.0">compare view</a></li>
</ul>
</details>
<br />

Updates `mongodb` from 4.17.2 to 6.5.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/mongodb/node-mongodb-native/releases">mongodb's releases</a>.</em></p>
<blockquote>
<h2>v6.5.0</h2>
<h2><a href="https://github.com/mongodb/node-mongodb-native/compare/v6.4.0...v6.5.0">6.5.0</a> (2024-03-11)</h2>
<p>The MongoDB Node.js team is pleased to announce version 6.5.0 of the <code>mongodb</code> package!</p>
<h2>Release Notes</h2>
<h3>Bulk Write Operations Generate Ids using <code>pkFactory</code></h3>
<p>When performing inserts, the driver automatically generates <code>_id</code>s for each document if there is no <code>_id</code> present.  By default, the driver generates <code>ObjectId</code>s.  An option, <code>pkFactory</code>, can be used to configure the driver to generate <code>_id</code>s that are not object ids.</p>
<p>For a long time, only <code>Collection.insert</code> and <code>Collection.insertMany</code> actually used the <code>pkFactory</code>, if configured.  Notably, <code>Collection.bulkWrite()</code>, <code>Collection.initializeOrderedBulkOp()</code> and <code>Collection.initializeOrderedBulkOp()</code> <em>always</em> generated <code>ObjectId</code>s, regardless of what was configured on collection.</p>
<p>The driver always generates <code>_id</code>s for inserted documents using the <code>pkFactory</code>.</p>
<blockquote>
<p>[!CAUTION]
If you are using a <code>pkFactory</code> and performing bulk writes, you may have inserted data into your database that does not have <code>_id</code>s generated by the <code>pkFactory</code>.</p>
</blockquote>
<h3>Fixed applying read preference to commands depending on topology</h3>
<p>When connecting to a secondary in a replica set with a direct connection, if a read operation is performed, the driver attaches a read preference of <code>primaryPreferred</code> to the command.</p>
<h3>Fixed memory leak in Connection layer</h3>
<p>The Connection class has recently been refactored to operate on our socket operations using promises. An oversight how we made async network operations interruptible made new promises for every operation. We've simplified the approach and corrected the leak.</p>
<h3>Query SRV and TXT records in parallel</h3>
<p>When connecting using a convenient SRV connection string (<code>mongodb+srv://</code>) hostnames are obtained from an SRV dns lookup and some configuration options are obtained from a TXT dns query. Those DNS operations are now performed in parallel to reduce first-time connection latency.</p>
<h3>Container and Kubernetes Awareness</h3>
<p>The Node.js driver now keeps track of container metadata in the <code>client.env.container</code> field of the handshake document.</p>
<p>If space allows, the following metadata will be included in <code>client.env.container</code>:</p>
<pre><code>env?: { 
  container?: {
    orchestrator?: 'kubernetes' // if process.env.KUBERNETES_SERVICE_HOST is set
    runtime?: 'docker' // if the '/.dockerenv' file exists
  } 
}
</code></pre>
<p>Note: If neither Kubernetes nor Docker is present, <code>client.env</code> will not have the <code>container</code> property.</p>
<h3>Add property <code>errorResponse</code> to MongoServerError</h3>
<p>The MongoServer error maps keys from the error document returned by the server on to itself. There are some use cases where the original error document is desirable to obtain in isolation. So now, the <code>mongoServerError.errorResponse</code> property stores a reference to the error document returned by the server.</p>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/mongodb/node-mongodb-native/blob/main/HISTORY.md">mongodb's changelog</a>.</em></p>
<blockquote>
<h2><a href="https://github.com/mongodb/node-mongodb-native/compare/v6.4.0...v6.5.0">6.5.0</a> (2024-03-11)</h2>
<h3>Features</h3>
<ul>
<li><strong>NODE-5968:</strong> container and Kubernetes awareness in client metadata (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4005">#4005</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/28b70408d0153e6b1118f3dd9cfbcfa30abe29f0">28b7040</a>)</li>
<li><strong>NODE-5988:</strong> Provide access to raw results doc on MongoServerError (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4016">#4016</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/c02324218db18e7c51f5b775f35edacc084762b0">c023242</a>)</li>
<li><strong>NODE-6008:</strong> deprecate CloseOptions interface (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4030">#4030</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/f6cd8d991b8dc8ca6d28964e46839c79727de669">f6cd8d9</a>)</li>
</ul>
<h3>Bug Fixes</h3>
<ul>
<li><strong>NODE-5636:</strong> generate _ids using pkFactory in bulk write operations (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4025">#4025</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/fbb505906cc171ae01279025d42f6ea1c3e7e299">fbb5059</a>)</li>
<li><strong>NODE-5981:</strong> read preference not applied to commands properly (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4010">#4010</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/937c9c890b6ad9be04823702b1b92b548ef4de9b">937c9c8</a>)</li>
<li><strong>NODE-5985:</strong> throw Nodejs' certificate expired error when TLS fails to connect instead of <code>CERT_HAS_EXPIRED</code> (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4014">#4014</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/057c223f13a0d129aa9efc01ba3c9b48271e7b97">057c223</a>)</li>
<li><strong>NODE-5993:</strong> memory leak in the <code>Connection</code> class (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4022">#4022</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/69de2537314fe25a5c3fa83f73235cfa7e7f729d">69de253</a>)</li>
</ul>
<h3>Performance Improvements</h3>
<ul>
<li><strong>NODE-5986:</strong> parallelize SRV/TXT resolution (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4012">#4012</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/eab8f2338622218a1e57121a31cad493f462931b">eab8f23</a>)</li>
</ul>
<h2><a href="https://github.com/mongodb/node-mongodb-native/compare/v6.3.0...v6.4.0">6.4.0</a> (2024-02-29)</h2>
<h3>Features</h3>
<ul>
<li><strong>NODE-3449:</strong> Add serverConnectionId to Command Monitoring Spec (<a href="https://github.com/mongodb/node-mongodb-native/commit/735f7aa17c2403044c015c0eb0fc7e4be08c0983">735f7aa</a>)</li>
<li><strong>NODE-3470:</strong> retry selects another mongos (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3963">#3963</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/84959ee27135abd04e4009b0adfebc7889d9139f">84959ee</a>)</li>
<li><strong>NODE-3689:</strong> require hello command for connection handshake to use OP_MSG disallowing OP_QUERY (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3938">#3938</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/ce7df0f79ed764d4a36caf1562cea4f5015c0ea6">ce7df0f</a>)</li>
<li><strong>NODE-4686:</strong> Add log messages to CLAM (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3955">#3955</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/e3bfa30eefe6b0a79141b32029d8e44d426275d6">e3bfa30</a>)</li>
<li><strong>NODE-4687:</strong> Add logging to server selection (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3946">#3946</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/7f3ce0bb8d4173739e5a3ffe9041dd11b28f9b08">7f3ce0b</a>)</li>
<li><strong>NODE-4719:</strong> add SDAM Logging Spec (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3940">#3940</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/a3c02983bc9cead125373d86a5c47cf8f4e40f9e">a3c0298</a>)</li>
<li><strong>NODE-4847:</strong> Add config error handling to logging (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3970">#3970</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/8f7bb593cbd1b2cd69c76702dbd1125479d1055a">8f7bb59</a>)</li>
<li><strong>NODE-5717:</strong> make ExceededTimeLimit retryable reads error (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3947">#3947</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/106ab092d0fe184509551c55b6b0fe817fa6ba21">106ab09</a>)</li>
<li><strong>NODE-5885:</strong> upgrade BSON to <code>^6.3.0</code> (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3983">#3983</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/9401d09af4def8bfbeff65e70863be5d13b3dd61">9401d09</a>)</li>
<li><strong>NODE-5939:</strong> Implement 6.x: cache the AWS credentials provider in the MONGODB-AWS auth logic (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3991">#3991</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/e0a37e594919d173762b0c64a24bb0291b159fa5">e0a37e5</a>)</li>
<li><strong>NODE-5978:</strong> upgrade BSON to ^6.4.0 (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4007">#4007</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/90f2f70ba61e598fd3c69c1e2a5ae4297fe8f333">90f2f70</a>)</li>
</ul>
<h3>Bug Fixes</h3>
<ul>
<li><strong>NODE-5127:</strong> implement reject kmsRequest on server close (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3964">#3964</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/568e05fdc3d78882e925e8e799aca6fb86c88295">568e05f</a>)</li>
<li><strong>NODE-5609:</strong> node driver omits base64 padding in sasl-continue command (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3975">#3975</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/b7d28d3135fa298d693aa22d2f1713054c5b0751">b7d28d3</a>)</li>
<li><strong>NODE-5765:</strong> change type for countDocuments (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3932">#3932</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/22cae0fbc0ad4043e27210577427870b8ec287f5">22cae0f</a>)</li>
<li><strong>NODE-5791:</strong> type error with $addToSet in bulkWrite (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3953">#3953</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/b93d405275c3a8ce6b1eba0af335ffb2a309e34e">b93d405</a>)</li>
<li><strong>NODE-5818:</strong> Add feature flagging to server selection logging (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3974">#3974</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/55203ef53d085518fd0acaf4b23d4a987cf6736d">55203ef</a>)</li>
<li><strong>NODE-5839:</strong> support for multibyte code-points in stringifyWithMaxLen (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3979">#3979</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/aed1cf0d2b1083e24997e49bfe7f5416e944466e">aed1cf0</a>)</li>
<li><strong>NODE-5840:</strong> heartbeat duration includes socket creation (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3973">#3973</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/a42039b9d03f1fc4d58f6edc641a839bc0364cd2">a42039b</a>)</li>
<li><strong>NODE-5901:</strong> propagate errors to transformed stream in cursor (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/3985">#3985</a>) (<a href="https://github.com/mongodb/node-mongodb-native/commit/ecfc6157786360832d1afb4294d76f83a90a9d70">ecfc615</a>)</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/c9e32adb152895865bb4d3f2d4df9c2667942bf7"><code>c9e32ad</code></a> chore(main): release 6.5.0 [skip-ci] (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4013">#4013</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/f6cd8d991b8dc8ca6d28964e46839c79727de669"><code>f6cd8d9</code></a> feat(NODE-6008): deprecate CloseOptions interface (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4030">#4030</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/36fa752b24db04a58bb7a1beb36db0c6356791ef"><code>36fa752</code></a> refactor(NODE-5915): topology close logic to be synchronous (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4021">#4021</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/937c9c890b6ad9be04823702b1b92b548ef4de9b"><code>937c9c8</code></a> fix(NODE-5981): read preference not applied to commands properly (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4010">#4010</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/31f1eed293f96d9e2f9d64a07088700c522ec860"><code>31f1eed</code></a> test(NODE-5969): convert CSFLE corpus test <a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/6">#6</a> to TS, async/await and add writ...</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/fbb505906cc171ae01279025d42f6ea1c3e7e299"><code>fbb5059</code></a> fix(NODE-5636): generate _ids using pkFactory in bulk write operations (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4025">#4025</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/2348548495ce5257ea2379f41e2693851e1bfb5d"><code>2348548</code></a> test(DRIVERS-2812): sdam load balancer tests in serverless (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4026">#4026</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/c02324218db18e7c51f5b775f35edacc084762b0"><code>c023242</code></a> feat(NODE-5988): Provide access to raw results doc on MongoServerError (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4016">#4016</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/69de2537314fe25a5c3fa83f73235cfa7e7f729d"><code>69de253</code></a> fix(NODE-5993): memory leak in the <code>Connection</code> class (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4022">#4022</a>)</li>
<li><a href="https://github.com/mongodb/node-mongodb-native/commit/28b70408d0153e6b1118f3dd9cfbcfa30abe29f0"><code>28b7040</code></a> feat(NODE-5968): container and Kubernetes awareness in client metadata (<a href="https://redirect.github.com/mongodb/node-mongodb-native/issues/4005">#4005</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/mongodb/node-mongodb-native/compare/v4.17.2...v6.5.0">compare view</a></li>
</ul>
</details>
<br />

Updates `@apollo/client` from 3.8.8 to 3.9.10
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/apollographql/apollo-client/releases"><code>@​apollo/client</code>'s releases</a>.</em></p>
<blockquote>
<h2>v3.9.10</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11738">#11738</a> <a href="https://github.com/apollographql/apollo-client/commit/b1a5eb80cae8bdf2e9d8627f1eab65e088c43438"><code>b1a5eb8</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix an issue where rerendering <code>useBackgroundQuery</code> after the <code>queryRef</code> had been disposed, either via the auto dispose timeout or by unmounting <code>useReadQuery</code>, would cause the <code>queryRef</code> to be recreated potentially resulting in another network request.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11738">#11738</a> <a href="https://github.com/apollographql/apollo-client/commit/b1a5eb80cae8bdf2e9d8627f1eab65e088c43438"><code>b1a5eb8</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Allow queryRefs to be disposed of synchronously when a suspense hook unmounts. This prevents some situations where using a suspense hook with the same query/variables as the disposed queryRef accidentally used the disposed queryRef rather than creating a new instance.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11670">#11670</a> <a href="https://github.com/apollographql/apollo-client/commit/cc5c03b2690f452483d83eecb68611a23055d99e"><code>cc5c03b</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Bail out of <code>executeSubSelectedArray</code> calls if the array has 0 elements.</p>
</li>
</ul>
<h2>v3.9.9</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://redirect.github.com/apollographql/apollo-client/pull/11696">#11696</a> <a href="https://github.com/apollographql/apollo-client/commit/466ef82198486fc696da64d17d82b46140760ac4"><code>466ef82</code></a> Thanks <a href="https://github.com/PiR1"><code>@​PiR1</code></a>! - Immediately dispose of the <code>queryRef</code> if <code>useBackgroundQuery</code> unmounts before the auto dispose timeout kicks in.</li>
</ul>
<h2>v3.9.8</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11706">#11706</a> <a href="https://github.com/apollographql/apollo-client/commit/8619bc7e569c1c732afa6faf605c83a6ce0cdf0c"><code>8619bc7</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue in all suspense hooks where returning an empty array after calling <code>fetchMore</code> would rerender the component with an empty list.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11694">#11694</a> <a href="https://github.com/apollographql/apollo-client/commit/835d5f30c532c432e2434561580e6f1ec44cc908"><code>835d5f3</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Expose <code>setErrorMessageHandler</code> from <code>@apollo/client/dev</code> entrypoint.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11689">#11689</a> <a href="https://github.com/apollographql/apollo-client/commit/cb8ffe50e903397f741b62a44624bfe69b5f7b75"><code>cb8ffe5</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where passing a new <code>from</code> option to <code>useFragment</code> would first render with the previous value before rerendering with the correct value.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11713">#11713</a> <a href="https://github.com/apollographql/apollo-client/commit/642092c713199093aede45f105a1ee3f637614cd"><code>642092c</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where setting a default <code>watchQuery</code> option in the <code>ApolloClient</code> constructor could break <code>startTransition</code> when used with suspense hooks.</p>
</li>
</ul>
<h2>v3.9.7</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11659">#11659</a> <a href="https://github.com/apollographql/apollo-client/commit/652a61e96db0f0e27d0a22fafae1df388f3fdf36"><code>652a61e</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Make <code>useRenderGuard</code> more resilient to changes in React internals.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11594">#11594</a> <a href="https://github.com/apollographql/apollo-client/commit/50b10970ca0efa290ae415ef801650327a89ab8e"><code>50b1097</code></a> Thanks <a href="https://github.com/alessbell"><code>@​alessbell</code></a>! - Adds a fix for multipart subscriptions that terminate with payload: null</p>
</li>
</ul>
<h2>v3.9.6</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11617">#11617</a> <a href="https://github.com/apollographql/apollo-client/commit/f1d8bc40c3d8e39340f721f4f1c3fd0ed77b8a6b"><code>f1d8bc4</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Allow Apollo Client instance to intercept hook functionality</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11638">#11638</a> <a href="https://github.com/apollographql/apollo-client/commit/bf93adaa0321b573db0ea8fc3a5c364e1fdfeef3"><code>bf93ada</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where calling <code>fetchMore</code> from a suspense-enabled hook inside <code>startTransition</code> caused an unnecessary rerender.</p>
</li>
</ul>
<h2>v3.9.5</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11595">#11595</a> <a href="https://github.com/apollographql/apollo-client/commit/8c20955874562e5b2ab35557325e047b059bc4fc"><code>8c20955</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Bumps the dependency <code>rehackt</code> to 0.0.5</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11592">#11592</a> <a href="https://github.com/apollographql/apollo-client/commit/1133469bd91ff76b9815e815a454a79d8e23a9bc"><code>1133469</code></a> Thanks <a href="https://github.com/Stephen2"><code>@​Stephen2</code></a>! - Strengthen <code>MockedResponse.newData</code> type</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11579">#11579</a> <a href="https://github.com/apollographql/apollo-client/commit/1ba2fd919f79dfdc7b9d3f7d1a7aa5918e648349"><code>1ba2fd9</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where partial data is reported to <code>useQuery</code> when using <code>notifyOnNetworkStatusChange</code> after it errors while another overlapping query succeeds.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11579">#11579</a> <a href="https://github.com/apollographql/apollo-client/commit/1ba2fd919f79dfdc7b9d3f7d1a7aa5918e648349"><code>1ba2fd9</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix an issue where a partial cache write for an errored query would result in automatically refetching that query.</p>
</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md"><code>@​apollo/client</code>'s changelog</a>.</em></p>
<blockquote>
<h2>3.9.10</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11738">#11738</a> <a href="https://github.com/apollographql/apollo-client/commit/b1a5eb80cae8bdf2e9d8627f1eab65e088c43438"><code>b1a5eb8</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix an issue where rerendering <code>useBackgroundQuery</code> after the <code>queryRef</code> had been disposed, either via the auto dispose timeout or by unmounting <code>useReadQuery</code>, would cause the <code>queryRef</code> to be recreated potentially resulting in another network request.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11738">#11738</a> <a href="https://github.com/apollographql/apollo-client/commit/b1a5eb80cae8bdf2e9d8627f1eab65e088c43438"><code>b1a5eb8</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Allow queryRefs to be disposed of synchronously when a suspense hook unmounts. This prevents some situations where using a suspense hook with the same query/variables as the disposed queryRef accidentally used the disposed queryRef rather than creating a new instance.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11670">#11670</a> <a href="https://github.com/apollographql/apollo-client/commit/cc5c03b2690f452483d83eecb68611a23055d99e"><code>cc5c03b</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Bail out of <code>executeSubSelectedArray</code> calls if the array has 0 elements.</p>
</li>
</ul>
<h2>3.9.9</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://redirect.github.com/apollographql/apollo-client/pull/11696">#11696</a> <a href="https://github.com/apollographql/apollo-client/commit/466ef82198486fc696da64d17d82b46140760ac4"><code>466ef82</code></a> Thanks <a href="https://github.com/PiR1"><code>@​PiR1</code></a>! - Immediately dispose of the <code>queryRef</code> if <code>useBackgroundQuery</code> unmounts before the auto dispose timeout kicks in.</li>
</ul>
<h2>3.9.8</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11706">#11706</a> <a href="https://github.com/apollographql/apollo-client/commit/8619bc7e569c1c732afa6faf605c83a6ce0cdf0c"><code>8619bc7</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue in all suspense hooks where returning an empty array after calling <code>fetchMore</code> would rerender the component with an empty list.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11694">#11694</a> <a href="https://github.com/apollographql/apollo-client/commit/835d5f30c532c432e2434561580e6f1ec44cc908"><code>835d5f3</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Expose <code>setErrorMessageHandler</code> from <code>@apollo/client/dev</code> entrypoint.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11689">#11689</a> <a href="https://github.com/apollographql/apollo-client/commit/cb8ffe50e903397f741b62a44624bfe69b5f7b75"><code>cb8ffe5</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where passing a new <code>from</code> option to <code>useFragment</code> would first render with the previous value before rerendering with the correct value.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11713">#11713</a> <a href="https://github.com/apollographql/apollo-client/commit/642092c713199093aede45f105a1ee3f637614cd"><code>642092c</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where setting a default <code>watchQuery</code> option in the <code>ApolloClient</code> constructor could break <code>startTransition</code> when used with suspense hooks.</p>
</li>
</ul>
<h2>3.9.7</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11659">#11659</a> <a href="https://github.com/apollographql/apollo-client/commit/652a61e96db0f0e27d0a22fafae1df388f3fdf36"><code>652a61e</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Make <code>useRenderGuard</code> more resilient to changes in React internals.</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11594">#11594</a> <a href="https://github.com/apollographql/apollo-client/commit/50b10970ca0efa290ae415ef801650327a89ab8e"><code>50b1097</code></a> Thanks <a href="https://github.com/alessbell"><code>@​alessbell</code></a>! - Adds a fix for multipart subscriptions that terminate with payload: null</p>
</li>
</ul>
<h2>3.9.6</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11617">#11617</a> <a href="https://github.com/apollographql/apollo-client/commit/f1d8bc40c3d8e39340f721f4f1c3fd0ed77b8a6b"><code>f1d8bc4</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Allow Apollo Client instance to intercept hook functionality</p>
</li>
<li>
<p><a href="https://redirect.github.com/apollographql/apollo-client/pull/11638">#11638</a> <a href="https://github.com/apollographql/apollo-client/commit/bf93adaa0321b573db0ea8fc3a5c364e1fdfeef3"><code>bf93ada</code></a> Thanks <a href="https://github.com/jerelmiller"><code>@​jerelmiller</code></a>! - Fix issue where calling <code>fetchMore</code> from a suspense-enabled hook inside <code>startTransition</code> caused an unnecessary rerender.</p>
</li>
</ul>
<h2>3.9.5</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://redirect.github.com/apollographql/apollo-client/pull/11595">#11595</a> <a href="https://github.com/apollographql/apollo-client/commit/8c20955874562e5b2ab35557325e047b059bc4fc"><code>8c20955</code></a> Thanks <a href="https://github.com/phryneas"><code>@​phryneas</code></a>! - Bumps the dependency <code>rehackt</code> to 0.0.5</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/apollographql/apollo-client/commit/e8556c39ac7b893e4bfc39d6ddfdc3ea6eed786d"><code>e8556c3</code></a> Version Packages (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11728">#11728</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/b1a5eb80cae8bdf2e9d8627f1eab65e088c43438"><code>b1a5eb8</code></a> Allow queryRefs to be disposed of synchronously (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11738">#11738</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/26f2cccf15afd4bb7437ee8d37789434f5f8bbbd"><code>26f2ccc</code></a> chore: use delimiter in accorance with docs to handle strings with newlines p...</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/d6aed0e1670ff619c9e96e95ac1c2a10a93d11ee"><code>d6aed0e</code></a> chore(deps): update all dependencies - patch updates (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11739">#11739</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/3e4c0543cb870a7524b84a8071ae2cd41fffafc0"><code>3e4c054</code></a> chore(deps): update cimg/node docker tag to v21.7.1 (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11740">#11740</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/e4128481de25339a4f417c4053726ac6d9f71541"><code>e412848</code></a> chore: configure git user directly in prerelease workflows (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11734">#11734</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/875b3c28408f4a3942a2a5502c96710e6e8204d5"><code>875b3c2</code></a> chore(deps): bump express from 4.18.2 to 4.19.2 in /integration-tests (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11730">#11730</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/2a5b890bb45ad7d65013292656b3ee1f8f80f768"><code>2a5b890</code></a> chore: manually set bot user info in prerelease workflows</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/77da849161c2b7492e1ef9b186b4c6f4046f3869"><code>77da849</code></a> chore(deps): update all dependencies - patch updates (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11725">#11725</a>)</li>
<li><a href="https://github.com/apollographql/apollo-client/commit/e19c3d07f0cff4d6f2e2c7020a08814bd47d6be1"><code>e19c3d0</code></a> fix: skip PR creation if no prerelease changesets exist (<a href="https://redirect.github.com/apollographql/apollo-client/issues/11729">#11729</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/apollographql/apollo-client/compare/v3.8.8...v3.9.10">compare view</a></li>
</ul>
</details>
<br />

Updates `@emotion/react` from 11.11.3 to 11.11.4
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/emotion-js/emotion/releases"><code>@​emotion/react</code>'s releases</a>.</em></p>
<blockquote>
<h2><code>@​emotion/react</code><a href="https://github.com/11"><code>@​11</code></a>.11.4</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://redirect.github.com/emotion-js/emotion/pull/3159">#3159</a> <a href="https://github.com/emotion-js/emotion/commit/5b82631d79a58e87e560024d724b849f3921b6e0"><code>5b82631d</code></a> Thanks <a href="https://github.com/iegik"><code>@​iegik</code></a>! - Renamed an internal <code>hasOwnProperty</code> to <code>hasOwn</code>. This avoids problems in CommonJS environments when the consumer tries to prevent prototype pollution with <code>Object.freeze(Object.prototype)</code>.</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/emotion-js/emotion/commit/6e0e3880e2366dc4d14c293acac851fc73be730f"><code>6e0e388</code></a> Version Packages (<a href="https://redirect.github.com/emotion-js/emotion/issues/3160">#3160</a>)</li>
<li><a href="https://github.com/emotion-js/emotion/commit/5b82631d79a58e87e560024d724b849f3921b6e0"><code>5b82631</code></a> Renamed an internal <code>hasOwnProperty</code> to <code>hasOwn</code> (<a href="https://redirect.github.com/emotion-js/emotion/issues/3159">#3159</a>)</li>
<li><a href="https://github.com/emotion-js/emotion/commit/0bfa97860d768905c88edcafac6e2554565352f8"><code>0bfa978</code></a> Add <code>disableRemotePlayback</code> to valid prop types (<a href="https://redirect.github.com/emotion-js/emotion/issues/3156">#3156</a>)</li>
<li>See full diff in <a href="https://github.com/emotion-js/emotion/compare/@emotion/react@11.11.3...@emotion/react@11.11.4">compare view</a></li>
</ul>
</details>
<br />

Updates `@emotion/styled` from 11.11.0 to 11.11.5
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/emotion-js/emotion/releases"><code>@​emotion/styled</code>'s releases</a>.</em></p>
<blockquote>
<h2><code>@​emotion/styled</code><a href="https://github.com/11"><code>@​11</code></a>.11.5</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/emotion-js/emotion/...

_Description has been truncated_

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/217)

----

### PR #218 - #196: add some additional logging around graph errors
##### 2024-04-08

Adding more logging to try and diagnose some token issues I'm seeing on Vercel, particularly on iOS.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/218)

----

### PR #214 - api-cors: add liberal cors policy
##### 2024-04-07

Adds a very open CORS policy as Vercel is suddenly blocking api requests from the md4k-web subdomain to the md4k-api subdomain. I'll tighten this up once I know this is the right way to fix it.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/214)

----

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