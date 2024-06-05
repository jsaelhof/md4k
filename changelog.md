### PR #244 - Bump the development-dependencies group with 4 updates
##### 2024-06-05

Bumps the development-dependencies group with 4 updates: [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin), [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser), [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) and [@testing-library/react](https://github.com/testing-library/react-testing-library).

Updates `@typescript-eslint/eslint-plugin` from 7.11.0 to 7.12.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/releases"><code>@​typescript-eslint/eslint-plugin</code>'s releases</a>.</em></p>
<blockquote>
<h2>v7.12.0</h2>
<h2>7.12.0 (2024-06-03)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> [no-useless-template-literals] rename to <code>no-useless-template-expression</code> (deprecate <code>no-useless-template-literals</code>) (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8821">#8821</a>)</li>
<li><strong>eslint-plugin:</strong> [no-floating-promises] add option 'allowForKnownSafePromises' (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9186">#9186</a>)</li>
<li><strong>rule-tester:</strong> check for parsing errors in suggestion fixes (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9052">#9052</a>)</li>
<li><strong>rule-tester:</strong> port <code>checkDuplicateTestCases</code> from ESLint (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9026">#9026</a>)</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li>no-useless-template-expression -&gt; no-unnecessary-template-expression (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9174">#9174</a>)</li>
<li><strong>eslint-plugin:</strong> [no-unnecessary-type-assertion] combine template literal check with <code>const</code> variable check (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8820">#8820</a>)</li>
<li><strong>eslint-plugin:</strong> [dot-notation] fix false positive when accessing private/protected property with optional chaining (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8851">#8851</a>)</li>
<li><strong>eslint-plugin:</strong> [explicit-member-accessibility] refine report locations (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8869">#8869</a>)</li>
<li><strong>eslint-plugin:</strong> [no-unnecessary-type-assertion] declares are always defined, so always check <code>declare</code>s (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8901">#8901</a>)</li>
<li><strong>eslint-plugin:</strong> [prefer-literal-enum-member] allow using member it self on allowBitwiseExpressions (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9114">#9114</a>)</li>
<li><strong>eslint-plugin:</strong> [return-await] clean up in-try-catch detection and make autofixes safe (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9031">#9031</a>)</li>
<li><strong>eslint-plugin:</strong> [member-ordering] also TSMethodSignature can be get/set (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9193">#9193</a>)</li>
<li><strong>types:</strong> correct typing ParserOptions (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9202">#9202</a>)</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>Han Yeong-woo <a href="https://github.com/nix6839"><code>@​nix6839</code></a></li>
<li>Joshua Chen</li>
<li>Kim Sang Du <a href="https://github.com/developer-bandi"><code>@​developer-bandi</code></a></li>
<li>Kirk Waiblinger</li>
<li>YeonJuan <a href="https://github.com/yeonjuan"><code>@​yeonjuan</code></a></li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
</blockquote>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/CHANGELOG.md"><code>@​typescript-eslint/eslint-plugin</code>'s changelog</a>.</em></p>
<blockquote>
<h2>7.12.0 (2024-06-03)</h2>
<h3>🚀 Features</h3>
<ul>
<li>
<p><strong>eslint-plugin:</strong> [no-useless-template-literals] rename to <code>no-useless-template-expression</code> (deprecate <code>no-useless-template-literals</code>)</p>
</li>
<li>
<p><strong>rule-tester:</strong> check for parsing errors in suggestion fixes</p>
</li>
<li>
<p><strong>rule-tester:</strong> port <code>checkDuplicateTestCases</code> from ESLint</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [no-floating-promises] add option 'allowForKnownSafePromises'</p>
</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li>
<p>no-useless-template-expression -&gt; no-unnecessary-template-expression</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [no-unnecessary-type-assertion] combine template literal check with <code>const</code> variable check</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [dot-notation] fix false positive when accessing private/protected property with optional chaining</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [explicit-member-accessibility] refine report locations</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [no-unnecessary-type-assertion] declares are always defined, so always check <code>declare</code>s</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [prefer-literal-enum-member] allow using member it self on allowBitwiseExpressions</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [return-await] clean up in-try-catch detection and make autofixes safe</p>
</li>
<li>
<p><strong>eslint-plugin:</strong> [member-ordering] also TSMethodSignature can be get/set</p>
</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>Han Yeong-woo</li>
<li>Joshua Chen</li>
<li>Kim Sang Du</li>
<li>Kirk Waiblinger</li>
<li>YeonJuan</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/7e93b286667fe3b86a3baac973d402414228c7a3"><code>7e93b28</code></a> chore(release): publish 7.12.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/d0adcf197558b1a043ed1a449920689dd62e9c3a"><code>d0adcf1</code></a> docs: clarify what require-await does (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9200">#9200</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/04990d545fc119329551ae3a55d79dfc0c7bf147"><code>04990d5</code></a> feat(eslint-plugin): [no-floating-promises] add option 'allowForKnownSafeProm...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/ad85249a2788565d42386e6561e2540bc2bdef58"><code>ad85249</code></a> docs: mention related ESLint rules in no-unused-vars page (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9198">#9198</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/e80a8d69337804fe35f0a8322330931494e0d257"><code>e80a8d6</code></a> docs: improve description for no-dynamic-delete (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9195">#9195</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/9f92b304f50455323e8292cf7ae83155fceea1ee"><code>9f92b30</code></a> docs: explicitly mention unbound-method limitation with thisArg (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9197">#9197</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/08a944856bde593909bc085d775f98fa488f7147"><code>08a9448</code></a> docs: add example with PascalCase function components (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9196">#9196</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/5ca7f6e563779157cac1ac1592e2f1b82068715a"><code>5ca7f6e</code></a> feat(rule-tester): port <code>checkDuplicateTestCases</code> from ESLint (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9026">#9026</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/a9dd526ec733701ad8a0423b6b86cc50009f5aeb"><code>a9dd526</code></a> fix(eslint-plugin): [member-ordering] also TSMethodSignature can be get/set (...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/2619c3b5e6718a6b70519d9e9807ee7acb745369"><code>2619c3b</code></a> fix(eslint-plugin): [return-await] clean up in-try-catch detection and make a...</li>
<li>Additional commits viewable in <a href="https://github.com/typescript-eslint/typescript-eslint/commits/v7.12.0/packages/eslint-plugin">compare view</a></li>
</ul>
</details>
<br />

Updates `@typescript-eslint/parser` from 7.11.0 to 7.12.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/releases"><code>@​typescript-eslint/parser</code>'s releases</a>.</em></p>
<blockquote>
<h2>v7.12.0</h2>
<h2>7.12.0 (2024-06-03)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> [no-useless-template-literals] rename to <code>no-useless-template-expression</code> (deprecate <code>no-useless-template-literals</code>) (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8821">#8821</a>)</li>
<li><strong>eslint-plugin:</strong> [no-floating-promises] add option 'allowForKnownSafePromises' (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9186">#9186</a>)</li>
<li><strong>rule-tester:</strong> check for parsing errors in suggestion fixes (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9052">#9052</a>)</li>
<li><strong>rule-tester:</strong> port <code>checkDuplicateTestCases</code> from ESLint (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9026">#9026</a>)</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li>no-useless-template-expression -&gt; no-unnecessary-template-expression (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9174">#9174</a>)</li>
<li><strong>eslint-plugin:</strong> [no-unnecessary-type-assertion] combine template literal check with <code>const</code> variable check (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8820">#8820</a>)</li>
<li><strong>eslint-plugin:</strong> [dot-notation] fix false positive when accessing private/protected property with optional chaining (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8851">#8851</a>)</li>
<li><strong>eslint-plugin:</strong> [explicit-member-accessibility] refine report locations (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8869">#8869</a>)</li>
<li><strong>eslint-plugin:</strong> [no-unnecessary-type-assertion] declares are always defined, so always check <code>declare</code>s (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8901">#8901</a>)</li>
<li><strong>eslint-plugin:</strong> [prefer-literal-enum-member] allow using member it self on allowBitwiseExpressions (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9114">#9114</a>)</li>
<li><strong>eslint-plugin:</strong> [return-await] clean up in-try-catch detection and make autofixes safe (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9031">#9031</a>)</li>
<li><strong>eslint-plugin:</strong> [member-ordering] also TSMethodSignature can be get/set (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9193">#9193</a>)</li>
<li><strong>types:</strong> correct typing ParserOptions (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9202">#9202</a>)</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>Han Yeong-woo <a href="https://github.com/nix6839"><code>@​nix6839</code></a></li>
<li>Joshua Chen</li>
<li>Kim Sang Du <a href="https://github.com/developer-bandi"><code>@​developer-bandi</code></a></li>
<li>Kirk Waiblinger</li>
<li>YeonJuan <a href="https://github.com/yeonjuan"><code>@​yeonjuan</code></a></li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
</blockquote>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/CHANGELOG.md"><code>@​typescript-eslint/parser</code>'s changelog</a>.</em></p>
<blockquote>
<h2>7.12.0 (2024-06-03)</h2>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>types:</strong> correct typing ParserOptions</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>Han Yeong-woo</li>
<li>Joshua Chen</li>
<li>Kim Sang Du</li>
<li>Kirk Waiblinger</li>
<li>YeonJuan</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/7e93b286667fe3b86a3baac973d402414228c7a3"><code>7e93b28</code></a> chore(release): publish 7.12.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/2bbf6565dfa629a8f91891b8e5decc3a16613b6c"><code>2bbf656</code></a> fix(types): correct typing ParserOptions (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser/issues/9202">#9202</a>)</li>
<li>See full diff in <a href="https://github.com/typescript-eslint/typescript-eslint/commits/v7.12.0/packages/parser">compare view</a></li>
</ul>
</details>
<br />

Updates `@types/node` from 20.14.0 to 20.14.1
<details>
<summary>Commits</summary>
<ul>
<li>See full diff in <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/node">compare view</a></li>
</ul>
</details>
<br />

Updates `@testing-library/react` from 15.0.7 to 16.0.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/testing-library/react-testing-library/releases"><code>@​testing-library/react</code>'s releases</a>.</em></p>
<blockquote>
<h2>v16.0.0</h2>
<h1><a href="https://github.com/testing-library/react-testing-library/compare/v15.0.7...v16.0.0">16.0.0</a> (2024-06-03)</h1>
<h3>Features</h3>
<ul>
<li>Move <code>@testing-library/dom</code> and <code>@types/react-dom</code>  to peer dependencies (<a href="https://redirect.github.com/testing-library/react-testing-library/issues/1305">#1305</a>) (<a href="https://github.com/testing-library/react-testing-library/commit/a4744fa904bf11812c92093226c3805450472636">a4744fa</a>)</li>
</ul>
<h3>BREAKING CHANGES</h3>
<ul>
<li><code>@testing-library/dom</code> was moved to a peer dependency and needs to be explicitly installed. This reduces the chance of having conflicting versions of <code>@testing-library/dom</code> installed that frequently caused bugs when used with <code>@testing-library/user-event</code>. We will also be able to allow new versions of <code>@testing-library/dom</code> being used without a SemVer major release of <code>@testing-library/react</code> by just widening the peer dependency.
<code>@types/react-dom</code> needs to be installed if you're typechecking files using <code>@testing-library/react</code>.</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/testing-library/react-testing-library/commit/a4744fa904bf11812c92093226c3805450472636"><code>a4744fa</code></a> feat: Move <code>@testing-library/dom</code> and <code>@types/react-dom</code>  to peer dependencie...</li>
<li>See full diff in <a href="https://github.com/testing-library/react-testing-library/compare/v15.0.7...v16.0.0">compare view</a></li>
</ul>
</details>
<br />


Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</summary>
<br />

You can trigger Dependabot actions by commenting on this PR:
- `@dependabot rebase` will rebase this PR
- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it
- `@dependabot merge` will merge this PR after your CI passes on it
- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it
- `@dependabot cancel merge` will cancel a previously requested merge and block automerging
- `@dependabot reopen` will reopen this PR if it is closed
- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually
- `@dependabot show <dependency name> ignore conditions` will show all of the ignore conditions of the specified dependency
- `@dependabot ignore <dependency name> major version` will close this group update PR and stop Dependabot creating any more for the specific dependency's major version (unless you unignore this specific dependency's major version or upgrade to it yourself)
- `@dependabot ignore <dependency name> minor version` will close this group update PR and stop Dependabot creating any more for the specific dependency's minor version (unless you unignore this specific dependency's minor version or upgrade to it yourself)
- `@dependabot ignore <dependency name>` will close this group update PR and stop Dependabot creating any more for the specific dependency (unless you unignore this specific dependency or upgrade to it yourself)
- `@dependabot unignore <dependency name>` will remove all of the ignore conditions of the specified dependency
- `@dependabot unignore <dependency name> <ignore condition>` will remove the ignore condition of the specified dependency and ignore conditions


</details>

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/244)

----

### PR #241 - rollback and ignore eslint 9
##### 2024-06-05

ESLint isn't fully ready, particularly for monorepos. Dependabot keeps updating it so for now i'm rolling it back again and now ignoring version 9 until I can make it work.

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/241)

----

### PR #240 - Bump the development-dependencies group across 1 directory with 23 updates
##### 2024-06-04

Bumps the development-dependencies group with 23 updates in the / directory:

| Package | From | To |
| --- | --- | --- |
| [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin) | `7.6.0` | `7.11.0` |
| [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser) | `7.6.0` | `7.11.0` |
| [eslint](https://github.com/eslint/eslint) | `8.57.0` | `9.4.0` |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) | `6.2.0` | `6.2.2` |
| [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) | `0.3.26` | `0.5.4` |
| [lint-staged](https://github.com/okonet/lint-staged) | `15.2.2` | `15.2.5` |
| [prettier](https://github.com/prettier/prettier) | `3.2.5` | `3.3.0` |
| [@graphql-codegen/typescript](https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/plugins/typescript/typescript) | `4.0.6` | `4.0.7` |
| [@graphql-codegen/typescript-resolvers](https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/plugins/typescript/resolvers) | `4.0.6` | `4.1.0` |
| [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) | `20.12.7` | `20.14.0` |
| [@vitest/ui](https://github.com/vitest-dev/vitest/tree/HEAD/packages/ui) | `1.4.0` | `1.6.0` |
| [vitest](https://github.com/vitest-dev/vitest/tree/HEAD/packages/vitest) | `1.4.0` | `1.6.0` |
| [@graphql-codegen/client-preset](https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client) | `4.2.5` | `4.2.6` |
| [@testing-library/dom](https://github.com/testing-library/dom-testing-library) | `10.0.0` | `10.1.0` |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | `6.4.2` | `6.4.5` |
| [@testing-library/react](https://github.com/testing-library/react-testing-library) | `15.0.0` | `15.0.7` |
| [@types/lodash](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/lodash) | `4.17.0` | `4.17.4` |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/HEAD/packages/plugin-react) | `4.2.1` | `4.3.0` |
| [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) | `7.34.1` | `7.34.2` |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/HEAD/packages/eslint-plugin-react-hooks) | `4.6.0` | `4.6.2` |
| [glob](https://github.com/isaacs/node-glob) | `10.3.12` | `10.4.1` |
| [jsdom](https://github.com/jsdom/jsdom) | `24.0.0` | `24.1.0` |
| [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) | `5.2.8` | `5.2.12` |


Updates `@typescript-eslint/eslint-plugin` from 7.6.0 to 7.11.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/releases"><code>@​typescript-eslint/eslint-plugin</code>'s releases</a>.</em></p>
<blockquote>
<h2>v7.11.0</h2>
<h2>7.11.0 (2024-05-27)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> deprecate prefer-ts-expect-error in favor of ban-ts-comment (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9081">#9081</a>)</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>ast-spec:</strong> add <code>EmptyStatement</code> to <code>Statement</code> (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8892">#8892</a>)</li>
<li><strong>eslint-plugin:</strong> [consistent-type-assertions] prevent syntax errors on arrow functions (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8826">#8826</a>)</li>
<li><strong>typescript-estree:</strong> truncate number of files printed by the maximum file error (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9127">#9127</a>)</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>auvred <a href="https://github.com/auvred"><code>@​auvred</code></a></li>
<li>Dom Armstrong <a href="https://github.com/domarmstrong"><code>@​domarmstrong</code></a></li>
<li>Kirk Waiblinger</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>v7.10.0</h2>
<h2>7.10.0 (2024-05-20)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> [sort-type-constituents] support case sensitive sorting (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8760">#8760</a>)</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>eslint-plugin:</strong> [prefer-regexp-exec] fix heuristic to check whether regex may contain global flag (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8764">#8764</a>)</li>
<li><strong>typescript-estree:</strong> don't add in-project files to defaultProjectMatchedFiles (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9097">#9097</a>)</li>
<li><strong>utils:</strong> remove function form type from flat config <code>files</code> and <code>ignores</code> (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9111">#9111</a>)</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>auvred <a href="https://github.com/auvred"><code>@​auvred</code></a></li>
<li>Emanuel Hoogeveen <a href="https://github.com/ehoogeveen-medweb"><code>@​ehoogeveen-medweb</code></a></li>
<li>jsfm01 <a href="https://github.com/jsfm01"><code>@​jsfm01</code></a></li>
<li>Kirk Waiblinger</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>v7.9.0</h2>
<h2>7.9.0 (2024-05-13)</h2>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/CHANGELOG.md"><code>@​typescript-eslint/eslint-plugin</code>'s changelog</a>.</em></p>
<blockquote>
<h2>7.11.0 (2024-05-27)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> deprecate prefer-ts-expect-error in favor of ban-ts-comment</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>eslint-plugin:</strong> [consistent-type-assertions] prevent syntax errors on arrow functions</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>auvred</li>
<li>Dom Armstrong</li>
<li>Kirk Waiblinger</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.10.0 (2024-05-20)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> [sort-type-constituents] support case sensitive sorting</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>eslint-plugin:</strong> [prefer-regexp-exec] fix heuristic to check whether regex may contain global flag</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>auvred</li>
<li>Emanuel Hoogeveen</li>
<li>jsfm01</li>
<li>Kirk Waiblinger</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.9.0 (2024-05-13)</h2>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>eslint-plugin:</strong> [explicit-function-return-types] fix false positive on default parameters</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/e36054187fb31113ba64c33c257d2a86cb3afc54"><code>e360541</code></a> chore(release): publish 7.11.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/b230385a3daf5562fb147572b59d44ec460332d5"><code>b230385</code></a> feat(eslint-plugin): deprecate prefer-ts-expect-error in favor of ban-ts-comm...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/3461f45479cf2483c0b26346229d251d7d0b08b2"><code>3461f45</code></a> test(eslint-plugin): [consistent-type-assertions] add missing <code>output: null</code> ...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/342b873f9f7ff9936d21ed527386f19ab094e729"><code>342b873</code></a> fix(eslint-plugin): [consistent-type-assertions] prevent syntax errors on arr...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/b5ce43b1fc76322eb65b709f63490ce49e622706"><code>b5ce43b</code></a> chore(eslint-plugin): replaced map/reduce with flatMap in normalizedOptions i...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/c18226e05e5c112352753ce61fde6997bde2af2c"><code>c18226e</code></a> chore(release): publish 7.10.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/8d92ba8533e65360877de1af12979c42b6c836e2"><code>8d92ba8</code></a> docs: [no-floating-promises] fix capitalization typo (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin/issues/9118">#9118</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/d951d8321152eca8e491156e9b741596e5d54591"><code>d951d83</code></a> fix(eslint-plugin): [prefer-regexp-exec] fix heuristic to check whether regex...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/987a96ee578a4d934ce019aa7e905657b6447710"><code>987a96e</code></a> feat(eslint-plugin): [sort-type-constituents] support case sensitive sorting ...</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/77fc366aa03f3cee1ebcf91a10dc0be8b669520e"><code>77fc366</code></a> chore(release): publish 7.9.0</li>
<li>Additional commits viewable in <a href="https://github.com/typescript-eslint/typescript-eslint/commits/v7.11.0/packages/eslint-plugin">compare view</a></li>
</ul>
</details>
<br />

Updates `@typescript-eslint/parser` from 7.6.0 to 7.11.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/releases"><code>@​typescript-eslint/parser</code>'s releases</a>.</em></p>
<blockquote>
<h2>v7.11.0</h2>
<h2>7.11.0 (2024-05-27)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> deprecate prefer-ts-expect-error in favor of ban-ts-comment (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9081">#9081</a>)</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>ast-spec:</strong> add <code>EmptyStatement</code> to <code>Statement</code> (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8892">#8892</a>)</li>
<li><strong>eslint-plugin:</strong> [consistent-type-assertions] prevent syntax errors on arrow functions (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8826">#8826</a>)</li>
<li><strong>typescript-estree:</strong> truncate number of files printed by the maximum file error (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9127">#9127</a>)</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>Abraham Guo</li>
<li>auvred <a href="https://github.com/auvred"><code>@​auvred</code></a></li>
<li>Dom Armstrong <a href="https://github.com/domarmstrong"><code>@​domarmstrong</code></a></li>
<li>Kirk Waiblinger</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>v7.10.0</h2>
<h2>7.10.0 (2024-05-20)</h2>
<h3>🚀 Features</h3>
<ul>
<li><strong>eslint-plugin:</strong> [sort-type-constituents] support case sensitive sorting (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8760">#8760</a>)</li>
</ul>
<h3>🩹 Fixes</h3>
<ul>
<li><strong>eslint-plugin:</strong> [prefer-regexp-exec] fix heuristic to check whether regex may contain global flag (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/8764">#8764</a>)</li>
<li><strong>typescript-estree:</strong> don't add in-project files to defaultProjectMatchedFiles (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9097">#9097</a>)</li>
<li><strong>utils:</strong> remove function form type from flat config <code>files</code> and <code>ignores</code> (<a href="https://redirect.github.com/typescript-eslint/typescript-eslint/pull/9111">#9111</a>)</li>
</ul>
<h3>❤️  Thank You</h3>
<ul>
<li>auvred <a href="https://github.com/auvred"><code>@​auvred</code></a></li>
<li>Emanuel Hoogeveen <a href="https://github.com/ehoogeveen-medweb"><code>@​ehoogeveen-medweb</code></a></li>
<li>jsfm01 <a href="https://github.com/jsfm01"><code>@​jsfm01</code></a></li>
<li>Kirk Waiblinger</li>
</ul>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>v7.9.0</h2>
<h2>7.9.0 (2024-05-13)</h2>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/CHANGELOG.md"><code>@​typescript-eslint/parser</code>'s changelog</a>.</em></p>
<blockquote>
<h2>7.11.0 (2024-05-27)</h2>
<p>This was a version bump only for parser to align it with other projects, there were no code changes.</p>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.10.0 (2024-05-20)</h2>
<p>This was a version bump only for parser to align it with other projects, there were no code changes.</p>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.9.0 (2024-05-13)</h2>
<p>This was a version bump only for parser to align it with other projects, there were no code changes.</p>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.8.0 (2024-04-29)</h2>
<p>This was a version bump only for parser to align it with other projects, there were no code changes.</p>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.7.1 (2024-04-22)</h2>
<p>This was a version bump only for parser to align it with other projects, there were no code changes.</p>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
<h2>7.7.0 (2024-04-15)</h2>
<p>This was a version bump only for parser to align it with other projects, there were no code changes.</p>
<p>You can read about our <a href="https://main--typescript-eslint.netlify.app/users/versioning">versioning strategy</a> and <a href="https://main--typescript-eslint.netlify.app/users/releases">releases</a> on our website.</p>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/e36054187fb31113ba64c33c257d2a86cb3afc54"><code>e360541</code></a> chore(release): publish 7.11.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/c18226e05e5c112352753ce61fde6997bde2af2c"><code>c18226e</code></a> chore(release): publish 7.10.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/77fc366aa03f3cee1ebcf91a10dc0be8b669520e"><code>77fc366</code></a> chore(release): publish 7.9.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/f53fece3678fdba005814fab080b6aa1b905a189"><code>f53fece</code></a> chore: add knip (<a href="https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser/issues/8192">#8192</a>)</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/ee677f6f67259f0081ad1a87b1fd9c89692eda21"><code>ee677f6</code></a> chore(release): publish 7.8.0</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/3e19436e83fe8fe2bc633847f2d9eb4026710203"><code>3e19436</code></a> chore(release): publish 7.7.1</li>
<li><a href="https://github.com/typescript-eslint/typescript-eslint/commit/e44a1a280f08f9fd0d29f74e5c3e73b7b64a9606"><code>e44a1a2</code></a> chore(release): publish 7.7.0</li>
<li>See full diff in <a href="https://github.com/typescript-eslint/typescript-eslint/commits/v7.11.0/packages/parser">compare view</a></li>
</ul>
</details>
<br />

Updates `eslint` from 8.57.0 to 9.4.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/eslint/eslint/releases">eslint's releases</a>.</em></p>
<blockquote>
<h2>v9.4.0</h2>
<h2>Features</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/89a4a0a260b8eb11487fe3d5d4d80f4630933eb3"><code>89a4a0a</code></a> feat: ignore IIFE's in the <code>no-loop-func</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/17528">#17528</a>) (Nitin Kumar)</li>
</ul>
<h2>Bug Fixes</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/f6534d14033e04f6c7c88a1f0c44a8077148ec6b"><code>f6534d1</code></a> fix: skip processor code blocks that match only universal patterns (<a href="https://redirect.github.com/eslint/eslint/issues/18507">#18507</a>) (Milos Djermanovic)</li>
<li><a href="https://github.com/eslint/eslint/commit/7226ebd69df04a4cc5fe546641f3443b60ec47e9"><code>7226ebd</code></a> fix: allow implicit undefined return in <code>no-constructor-return</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18515">#18515</a>) (Ali Rezvani)</li>
<li><a href="https://github.com/eslint/eslint/commit/389744be255717c507fafc158746e579ac08d77e"><code>389744b</code></a> fix: use <code>@eslint/config-inspector@latest</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18483">#18483</a>) (唯然)</li>
<li><a href="https://github.com/eslint/eslint/commit/70118a5b11860fce364028d3c515393b6a586aae"><code>70118a5</code></a> fix: <code>func-style</code> false positive with arrow functions and <code>super</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18473">#18473</a>) (Milos Djermanovic)</li>
</ul>
<h2>Documentation</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/d7ab6f589d39c64bc5daaef4be3a972032f04c05"><code>d7ab6f5</code></a> docs: update theme when when <code>prefers-color-scheme</code> changes (<a href="https://redirect.github.com/eslint/eslint/issues/18510">#18510</a>) (Nitin Kumar)</li>
<li><a href="https://github.com/eslint/eslint/commit/525fdffde4cb34010bc503f6d54855b3f9d07811"><code>525fdff</code></a> docs: fix components files (<a href="https://redirect.github.com/eslint/eslint/issues/18519">#18519</a>) (Tanuj Kanti)</li>
<li><a href="https://github.com/eslint/eslint/commit/80747d23dec69b30ea2c3620a1198f7d06b012b8"><code>80747d2</code></a> docs: refactor <code>prefer-destructuring</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18472">#18472</a>) (Tanuj Kanti)</li>
<li><a href="https://github.com/eslint/eslint/commit/f06e0b5f51ae1aad8957d27aa0ea4d6d0ad51455"><code>f06e0b5</code></a> docs: clarify func-style (<a href="https://redirect.github.com/eslint/eslint/issues/18477">#18477</a>) (Cameron Steffen)</li>
</ul>
<h2>Chores</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/010dd2ef50456a1ba5892152192b6c9d9d5fd470"><code>010dd2e</code></a> chore: upgrade to <code>@eslint/js@9.4.0</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18534">#18534</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/5e1b5dc9a3d839737125571c8fd4e239d81608de"><code>5e1b5dc</code></a> chore: package.json update for <code>@​eslint/js</code> release (Jenkins)</li>
<li><a href="https://github.com/eslint/eslint/commit/594145f493d913e2b7e25a27accf33c44e1d4687"><code>594145f</code></a> refactor: switch to <code>@eslint/config-array</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18527">#18527</a>) (Francesco Trotta)</li>
</ul>
<h2>v9.3.0</h2>
<h2>Features</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/b32153c97317c6fc593c2abbf6ae994519d473b4"><code>b32153c</code></a> feat: add <code>overrides.namedExports</code> to <code>func-style</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18444">#18444</a>) (Percy Ma)</li>
<li><a href="https://github.com/eslint/eslint/commit/b67eba4514026ef7e489798fd883beb678817a46"><code>b67eba4</code></a> feat: add <code>restrictedNamedExportsPattern</code> to <code>no-restricted-exports</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18431">#18431</a>) (Akul Srivastava)</li>
<li><a href="https://github.com/eslint/eslint/commit/069aa680c78b8516b9a1b568519f1d01e74fb2a2"><code>069aa68</code></a> feat: add option <code>allowEscape</code> to <code>no-misleading-character-class</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18208">#18208</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/05ef92dd15949014c0735125c89b7bd70dec58c8"><code>05ef92d</code></a> feat: deprecate <code>multiline-comment-style</code> &amp; <code>line-comment-position</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18435">#18435</a>) (唯然)</li>
<li><a href="https://github.com/eslint/eslint/commit/db0b174c3ace60e29585bfc3520727c44cefcfc5"><code>db0b174</code></a> feat: add <code>enforceForInnerExpressions</code> option to <code>no-extra-boolean-cast</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18222">#18222</a>) (Kirk Waiblinger)</li>
</ul>
<h2>Bug Fixes</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/8db0eff4ba89b45f439c27ba1202ed056ae92e83"><code>8db0eff</code></a> fix: Improve config error messages (<a href="https://redirect.github.com/eslint/eslint/issues/18457">#18457</a>) (Nicholas C. Zakas)</li>
<li><a href="https://github.com/eslint/eslint/commit/5c28d9a367e1608e097c491f40b8afd0730a8b9e"><code>5c28d9a</code></a> fix: don't remove comments between key and value in object-shorthand (<a href="https://redirect.github.com/eslint/eslint/issues/18442">#18442</a>) (Kuba Jastrzębski)</li>
<li><a href="https://github.com/eslint/eslint/commit/39fb0ee9cd33f952707294e67f194d414261a571"><code>39fb0ee</code></a> fix: object-shorthand loses type parameters when auto-fixing (<a href="https://redirect.github.com/eslint/eslint/issues/18438">#18438</a>) (dalaoshu)</li>
<li><a href="https://github.com/eslint/eslint/commit/37eba48d6f2d3c99c5ecf2fc3967e428a6051dbb"><code>37eba48</code></a> fix: don't crash when <code>fs.readFile</code> returns promise from another realm (<a href="https://redirect.github.com/eslint/eslint/issues/18416">#18416</a>) (Milos Djermanovic)</li>
</ul>
<h2>Documentation</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/ceada8c702d4903d6872f46a25d68b672d2c6289"><code>ceada8c</code></a> docs: explain how to use &quot;tsc waiting&quot; label (<a href="https://redirect.github.com/eslint/eslint/issues/18466">#18466</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/62e686c5e90411fed2b5561be5688d7faf64d791"><code>62e686c</code></a> docs: Add troubleshooting info for plugin compatibility (<a href="https://redirect.github.com/eslint/eslint/issues/18451">#18451</a>) (Nicholas C. Zakas)</li>
<li><a href="https://github.com/eslint/eslint/commit/e17e1c0dd5d5dc5a4cae5888116913f6555b1f1e"><code>e17e1c0</code></a> docs: Update README (GitHub Actions Bot)</li>
<li><a href="https://github.com/eslint/eslint/commit/2465a1e3f3b78f302f64e62e5f0d851626b81b3c"><code>2465a1e</code></a> docs: Update README (GitHub Actions Bot)</li>
<li><a href="https://github.com/eslint/eslint/commit/d23574c5c0275c8b3714a7a6d3e8bf2108af60f1"><code>d23574c</code></a> docs: Clarify usage of <code>no-unreachable</code> with TypeScript (<a href="https://redirect.github.com/eslint/eslint/issues/18445">#18445</a>) (benj-dobs)</li>
<li><a href="https://github.com/eslint/eslint/commit/1db9bae944b69945e3b05f76754cced16ae83838"><code>1db9bae</code></a> docs: Fix typos (<a href="https://redirect.github.com/eslint/eslint/issues/18443">#18443</a>) (Frieder Bluemle)</li>
<li><a href="https://github.com/eslint/eslint/commit/70651968beb0f907c9689c2477721c0b991acc4a"><code>7065196</code></a> docs: Update README (GitHub Actions Bot)</li>
<li><a href="https://github.com/eslint/eslint/commit/04e7c6e0a24bd2d7691ae641e2dc0e6d538dcdfd"><code>04e7c6e</code></a> docs: update deprecation notice of <code>no-return-await</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18433">#18433</a>) (Tanuj Kanti)</li>
<li><a href="https://github.com/eslint/eslint/commit/e7635126f36145b47fe5d135ab258af43b2715c9"><code>e763512</code></a> docs: Link global ignores section in config object property list (<a href="https://redirect.github.com/eslint/eslint/issues/18430">#18430</a>) (MaoShizhong)</li>
<li><a href="https://github.com/eslint/eslint/commit/ac7f718de66131187302387fc26907c4c93196f9"><code>ac7f718</code></a> docs: reflect release of v9 in config migration guide (<a href="https://redirect.github.com/eslint/eslint/issues/18412">#18412</a>) (Peter Briggs)</li>
<li><a href="https://github.com/eslint/eslint/commit/0de0909e001191a3464077d37e8c0b3f67e9a1cb"><code>0de0909</code></a> docs: fix grammar in configuration file resolution (<a href="https://redirect.github.com/eslint/eslint/issues/18419">#18419</a>) (Mike McCready)</li>
</ul>
<h2>Chores</h2>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/58e271924aeb8ac2b8864845cd787ef3f9239939"><code>58e2719</code></a> chore: update dependencies for v9.3.0 release (<a href="https://redirect.github.com/eslint/eslint/issues/18469">#18469</a>) (Francesco Trotta)</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/eslint/eslint/blob/main/CHANGELOG.md">eslint's changelog</a>.</em></p>
<blockquote>
<p>v9.4.0 - May 31, 2024</p>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/010dd2ef50456a1ba5892152192b6c9d9d5fd470"><code>010dd2e</code></a> chore: upgrade to <code>@eslint/js@9.4.0</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18534">#18534</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/5e1b5dc9a3d839737125571c8fd4e239d81608de"><code>5e1b5dc</code></a> chore: package.json update for <code>@​eslint/js</code> release (Jenkins)</li>
<li><a href="https://github.com/eslint/eslint/commit/d7ab6f589d39c64bc5daaef4be3a972032f04c05"><code>d7ab6f5</code></a> docs: update theme when when <code>prefers-color-scheme</code> changes (<a href="https://redirect.github.com/eslint/eslint/issues/18510">#18510</a>) (Nitin Kumar)</li>
<li><a href="https://github.com/eslint/eslint/commit/594145f493d913e2b7e25a27accf33c44e1d4687"><code>594145f</code></a> refactor: switch to <code>@eslint/config-array</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18527">#18527</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/525fdffde4cb34010bc503f6d54855b3f9d07811"><code>525fdff</code></a> docs: fix components files (<a href="https://redirect.github.com/eslint/eslint/issues/18519">#18519</a>) (Tanuj Kanti)</li>
<li><a href="https://github.com/eslint/eslint/commit/89a4a0a260b8eb11487fe3d5d4d80f4630933eb3"><code>89a4a0a</code></a> feat: ignore IIFE's in the <code>no-loop-func</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/17528">#17528</a>) (Nitin Kumar)</li>
<li><a href="https://github.com/eslint/eslint/commit/80747d23dec69b30ea2c3620a1198f7d06b012b8"><code>80747d2</code></a> docs: refactor <code>prefer-destructuring</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18472">#18472</a>) (Tanuj Kanti)</li>
<li><a href="https://github.com/eslint/eslint/commit/f6534d14033e04f6c7c88a1f0c44a8077148ec6b"><code>f6534d1</code></a> fix: skip processor code blocks that match only universal patterns (<a href="https://redirect.github.com/eslint/eslint/issues/18507">#18507</a>) (Milos Djermanovic)</li>
<li><a href="https://github.com/eslint/eslint/commit/7226ebd69df04a4cc5fe546641f3443b60ec47e9"><code>7226ebd</code></a> fix: allow implicit undefined return in <code>no-constructor-return</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18515">#18515</a>) (Ali Rezvani)</li>
<li><a href="https://github.com/eslint/eslint/commit/f06e0b5f51ae1aad8957d27aa0ea4d6d0ad51455"><code>f06e0b5</code></a> docs: clarify func-style (<a href="https://redirect.github.com/eslint/eslint/issues/18477">#18477</a>) (Cameron Steffen)</li>
<li><a href="https://github.com/eslint/eslint/commit/389744be255717c507fafc158746e579ac08d77e"><code>389744b</code></a> fix: use <code>@eslint/config-inspector@latest</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18483">#18483</a>) (唯然)</li>
<li><a href="https://github.com/eslint/eslint/commit/70118a5b11860fce364028d3c515393b6a586aae"><code>70118a5</code></a> fix: <code>func-style</code> false positive with arrow functions and <code>super</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18473">#18473</a>) (Milos Djermanovic)</li>
</ul>
<p>v9.3.0 - May 17, 2024</p>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/58e271924aeb8ac2b8864845cd787ef3f9239939"><code>58e2719</code></a> chore: update dependencies for v9.3.0 release (<a href="https://redirect.github.com/eslint/eslint/issues/18469">#18469</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/b681ecbdf0882cbb7902682a9d35c1e76ac76c30"><code>b681ecb</code></a> chore: package.json update for <code>@​eslint/js</code> release (Jenkins)</li>
<li><a href="https://github.com/eslint/eslint/commit/8db0eff4ba89b45f439c27ba1202ed056ae92e83"><code>8db0eff</code></a> fix: Improve config error messages (<a href="https://redirect.github.com/eslint/eslint/issues/18457">#18457</a>) (Nicholas C. Zakas)</li>
<li><a href="https://github.com/eslint/eslint/commit/ceada8c702d4903d6872f46a25d68b672d2c6289"><code>ceada8c</code></a> docs: explain how to use &quot;tsc waiting&quot; label (<a href="https://redirect.github.com/eslint/eslint/issues/18466">#18466</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/b32153c97317c6fc593c2abbf6ae994519d473b4"><code>b32153c</code></a> feat: add <code>overrides.namedExports</code> to <code>func-style</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18444">#18444</a>) (Percy Ma)</li>
<li><a href="https://github.com/eslint/eslint/commit/06f1d1cd874dfc40a6651b08d766f6522a67b3f0"><code>06f1d1c</code></a> chore: update dependency <code>@​humanwhocodes/retry</code> to ^0.3.0 (<a href="https://redirect.github.com/eslint/eslint/issues/18463">#18463</a>) (renovate[bot])</li>
<li><a href="https://github.com/eslint/eslint/commit/5c28d9a367e1608e097c491f40b8afd0730a8b9e"><code>5c28d9a</code></a> fix: don't remove comments between key and value in object-shorthand (<a href="https://redirect.github.com/eslint/eslint/issues/18442">#18442</a>) (Kuba Jastrzębski)</li>
<li><a href="https://github.com/eslint/eslint/commit/62e686c5e90411fed2b5561be5688d7faf64d791"><code>62e686c</code></a> docs: Add troubleshooting info for plugin compatibility (<a href="https://redirect.github.com/eslint/eslint/issues/18451">#18451</a>) (Nicholas C. Zakas)</li>
<li><a href="https://github.com/eslint/eslint/commit/e17e1c0dd5d5dc5a4cae5888116913f6555b1f1e"><code>e17e1c0</code></a> docs: Update README (GitHub Actions Bot)</li>
<li><a href="https://github.com/eslint/eslint/commit/39fb0ee9cd33f952707294e67f194d414261a571"><code>39fb0ee</code></a> fix: object-shorthand loses type parameters when auto-fixing (<a href="https://redirect.github.com/eslint/eslint/issues/18438">#18438</a>) (dalaoshu)</li>
<li><a href="https://github.com/eslint/eslint/commit/b67eba4514026ef7e489798fd883beb678817a46"><code>b67eba4</code></a> feat: add <code>restrictedNamedExportsPattern</code> to <code>no-restricted-exports</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18431">#18431</a>) (Akul Srivastava)</li>
<li><a href="https://github.com/eslint/eslint/commit/2465a1e3f3b78f302f64e62e5f0d851626b81b3c"><code>2465a1e</code></a> docs: Update README (GitHub Actions Bot)</li>
<li><a href="https://github.com/eslint/eslint/commit/d23574c5c0275c8b3714a7a6d3e8bf2108af60f1"><code>d23574c</code></a> docs: Clarify usage of <code>no-unreachable</code> with TypeScript (<a href="https://redirect.github.com/eslint/eslint/issues/18445">#18445</a>) (benj-dobs)</li>
<li><a href="https://github.com/eslint/eslint/commit/1db9bae944b69945e3b05f76754cced16ae83838"><code>1db9bae</code></a> docs: Fix typos (<a href="https://redirect.github.com/eslint/eslint/issues/18443">#18443</a>) (Frieder Bluemle)</li>
<li><a href="https://github.com/eslint/eslint/commit/069aa680c78b8516b9a1b568519f1d01e74fb2a2"><code>069aa68</code></a> feat: add option <code>allowEscape</code> to <code>no-misleading-character-class</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18208">#18208</a>) (Francesco Trotta)</li>
<li><a href="https://github.com/eslint/eslint/commit/70651968beb0f907c9689c2477721c0b991acc4a"><code>7065196</code></a> docs: Update README (GitHub Actions Bot)</li>
<li><a href="https://github.com/eslint/eslint/commit/05ef92dd15949014c0735125c89b7bd70dec58c8"><code>05ef92d</code></a> feat: deprecate <code>multiline-comment-style</code> &amp; <code>line-comment-position</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18435">#18435</a>) (唯然)</li>
<li><a href="https://github.com/eslint/eslint/commit/a63ed722a64040d2be90f36e45f1f5060a9fe28e"><code>a63ed72</code></a> refactor: Use <code>node:</code> protocol for built-in Node.js modules (<a href="https://redirect.github.com/eslint/eslint/issues/18434">#18434</a>) (Milos Djermanovic)</li>
<li><a href="https://github.com/eslint/eslint/commit/04e7c6e0a24bd2d7691ae641e2dc0e6d538dcdfd"><code>04e7c6e</code></a> docs: update deprecation notice of <code>no-return-await</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18433">#18433</a>) (Tanuj Kanti)</li>
<li><a href="https://github.com/eslint/eslint/commit/e7635126f36145b47fe5d135ab258af43b2715c9"><code>e763512</code></a> docs: Link global ignores section in config object property list (<a href="https://redirect.github.com/eslint/eslint/issues/18430">#18430</a>) (MaoShizhong)</li>
<li><a href="https://github.com/eslint/eslint/commit/37eba48d6f2d3c99c5ecf2fc3967e428a6051dbb"><code>37eba48</code></a> fix: don't crash when <code>fs.readFile</code> returns promise from another realm (<a href="https://redirect.github.com/eslint/eslint/issues/18416">#18416</a>) (Milos Djermanovic)</li>
<li><a href="https://github.com/eslint/eslint/commit/040700a7a19726bb9568fc190bff95e88fb87269"><code>040700a</code></a> chore: update dependency markdownlint-cli to ^0.40.0 (<a href="https://redirect.github.com/eslint/eslint/issues/18425">#18425</a>) (renovate[bot])</li>
<li><a href="https://github.com/eslint/eslint/commit/f47847c1b45ef1ac5f05f3a37f5f8c46b860c57f"><code>f47847c</code></a> chore: update actions/stale action to v9 (<a href="https://redirect.github.com/eslint/eslint/issues/18426">#18426</a>) (renovate[bot])</li>
<li><a href="https://github.com/eslint/eslint/commit/c18ad252c280443e85f788c70ce597e1941f8ff5"><code>c18ad25</code></a> chore: update actions/upload-artifact action to v4 (<a href="https://redirect.github.com/eslint/eslint/issues/18427">#18427</a>) (renovate[bot])</li>
<li><a href="https://github.com/eslint/eslint/commit/27e3060f7519d84501a11218343c34df4947b303"><code>27e3060</code></a> chore: Disable documentation label (<a href="https://redirect.github.com/eslint/eslint/issues/18423">#18423</a>) (Nicholas C. Zakas)</li>
<li><a href="https://github.com/eslint/eslint/commit/ac7f718de66131187302387fc26907c4c93196f9"><code>ac7f718</code></a> docs: reflect release of v9 in config migration guide (<a href="https://redirect.github.com/eslint/eslint/issues/18412">#18412</a>) (Peter Briggs)</li>
<li><a href="https://github.com/eslint/eslint/commit/db0b174c3ace60e29585bfc3520727c44cefcfc5"><code>db0b174</code></a> feat: add <code>enforceForInnerExpressions</code> option to <code>no-extra-boolean-cast</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18222">#18222</a>) (Kirk Waiblinger)</li>
<li><a href="https://github.com/eslint/eslint/commit/0de0909e001191a3464077d37e8c0b3f67e9a1cb"><code>0de0909</code></a> docs: fix grammar in configuration file resolution (<a href="https://redirect.github.com/eslint/eslint/issues/18419">#18419</a>) (Mike McCready)</li>
</ul>
<p>v9.2.0 - May 3, 2024</p>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/b3466052802a1586560ad56a8128d603284d58c2"><code>b346605</code></a> chore: upgrade <code>@​eslint/js</code><a href="https://github.com/9"><code>@​9</code></a>.2.0 (<a href="https://redirect.github.com/eslint/eslint/issues/18413">#18413</a>) (Milos Djermanovic)</li>
<li><a href="https://github.com/eslint/eslint/commit/c4c18e05fc866b73218dbe58b760546f39a2a620"><code>c4c18e0</code></a> chore: package.json update for <code>@​eslint/js</code> release (Jenkins)</li>
</ul>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/eslint/eslint/commit/a5f7e589eca05a8a30bd2532380c304759cc8225"><code>a5f7e58</code></a> 9.4.0</li>
<li><a href="https://github.com/eslint/eslint/commit/8c6d0c3436ed9828b6945721e8ba3f121fb16b40"><code>8c6d0c3</code></a> Build: changelog update for 9.4.0</li>
<li><a href="https://github.com/eslint/eslint/commit/010dd2ef50456a1ba5892152192b6c9d9d5fd470"><code>010dd2e</code></a> chore: upgrade to <code>@eslint/js@9.4.0</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18534">#18534</a>)</li>
<li><a href="https://github.com/eslint/eslint/commit/5e1b5dc9a3d839737125571c8fd4e239d81608de"><code>5e1b5dc</code></a> chore: package.json update for <code>@​eslint/js</code> release</li>
<li><a href="https://github.com/eslint/eslint/commit/d7ab6f589d39c64bc5daaef4be3a972032f04c05"><code>d7ab6f5</code></a> docs: update theme when when <code>prefers-color-scheme</code> changes (<a href="https://redirect.github.com/eslint/eslint/issues/18510">#18510</a>)</li>
<li><a href="https://github.com/eslint/eslint/commit/594145f493d913e2b7e25a27accf33c44e1d4687"><code>594145f</code></a> refactor: switch to <code>@eslint/config-array</code> (<a href="https://redirect.github.com/eslint/eslint/issues/18527">#18527</a>)</li>
<li><a href="https://github.com/eslint/eslint/commit/525fdffde4cb34010bc503f6d54855b3f9d07811"><code>525fdff</code></a> docs: fix components files (<a href="https://redirect.github.com/eslint/eslint/issues/18519">#18519</a>)</li>
<li><a href="https://github.com/eslint/eslint/commit/89a4a0a260b8eb11487fe3d5d4d80f4630933eb3"><code>89a4a0a</code></a> feat: ignore IIFE's in the <code>no-loop-func</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/17528">#17528</a>)</li>
<li><a href="https://github.com/eslint/eslint/commit/80747d23dec69b30ea2c3620a1198f7d06b012b8"><code>80747d2</code></a> docs: refactor <code>prefer-destructuring</code> rule (<a href="https://redirect.github.com/eslint/eslint/issues/18472">#18472</a>)</li>
<li><a href="https://github.com/eslint/eslint/commit/f6534d14033e04f6c7c88a1f0c44a8077148ec6b"><code>f6534d1</code></a> fix: skip processor code blocks that match only universal patterns (<a href="https://redirect.github.com/eslint/eslint/issues/18507">#18507</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/eslint/eslint/compare/v8.57.0...v9.4.0">compare view</a></li>
</ul>
</details>
<br />

Updates `eslint-plugin-testing-library` from 6.2.0 to 6.2.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/testing-library/eslint-plugin-testing-library/releases">eslint-plugin-testing-library's releases</a>.</em></p>
<blockquote>
<h2>v6.2.2</h2>
<h2><a href="https://github.com/testing-library/eslint-plugin-testing-library/compare/v6.2.1...v6.2.2">6.2.2</a> (2024-04-15)</h2>
<h3>Bug Fixes</h3>
<ul>
<li><strong>await-async-events:</strong> false positives for userEvent.setup() returned (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/895">#895</a>) (<a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/fb32c5c07dbbd7449b8b1d3983683765912b9e72">fb32c5c</a>)</li>
</ul>
<h2>v6.2.1</h2>
<h2><a href="https://github.com/testing-library/eslint-plugin-testing-library/compare/v6.2.0...v6.2.1">6.2.1</a> (2024-04-12)</h2>
<h3>Bug Fixes</h3>
<ul>
<li><strong>await-async-events:</strong> false positive reports on awaited expressions evaluating to promise (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/890">#890</a>) (<a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/767f1be6c15f05d430f662b09fc467b2feeff6ed">767f1be</a>)</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/fb32c5c07dbbd7449b8b1d3983683765912b9e72"><code>fb32c5c</code></a> fix(await-async-events): false positives for userEvent.setup() returned (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/895">#895</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/767f1be6c15f05d430f662b09fc467b2feeff6ed"><code>767f1be</code></a> fix(await-async-events): false positive reports on awaited expressions evalua...</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/6b39e606a4de8070eb6378f999d3762feab0f644"><code>6b39e60</code></a> build(deps-dev): bump eslint-doc-generator from 1.4.3 to 1.7.0 (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/885">#885</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/88120fe88f6eb0acc4d81c0a867c933de57c3957"><code>88120fe</code></a> build(deps-dev): bump eslint-plugin-import from 2.29.0 to 2.29.1 (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/874">#874</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/b5bb061407732dc75f718b05b5045d1511aee466"><code>b5bb061</code></a> build(deps): bump codecov/codecov-action from 3 to 4 (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/879">#879</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/5497dc269825c89c7022febed7efed741826b6b2"><code>5497dc2</code></a> refactor: fix ts-expect-error (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/873">#873</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/93a6ab91d34a9130b505fc181bca06db48338cd9"><code>93a6ab9</code></a> chore: upgrade TypeScript to v5.0 (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/858">#858</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/9126dc7387e8958504e354b86c90e1c32fe72622"><code>9126dc7</code></a> chore: add codecov step (<a href="https://redirect.github.com/testing-library/eslint-plugin-testing-library/issues/871">#871</a>)</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/13a4f7059eeec10c5346a885aeb2e05ff513b2c2"><code>13a4f70</code></a> docs: add codecov badge to README</li>
<li><a href="https://github.com/testing-library/eslint-plugin-testing-library/commit/6d7930b853597e6f40c52589cea21fbb929349cf"><code>6d7930b</code></a> style: format README</li>
<li>Additional commits viewable in <a href="https://github.com/testing-library/eslint-plugin-testing-library/compare/v6.2.0...v6.2.2">compare view</a></li>
</ul>
</details>
<br />

Updates `eslint-plugin-vitest` from 0.3.26 to 0.5.4
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/veritem/eslint-plugin-vitest/releases">eslint-plugin-vitest's releases</a>.</em></p>
<blockquote>
<h2>v0.5.4</h2>
<h3>Features</h3>
<ul>
<li>support old Eslint configuration</li>
<li>update dependencies</li>
</ul>
<h2>v0.5.3</h2>
<h3>Bug Fixes</h3>
<ul>
<li>configs in plugin declaration file (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/428">#428</a>) (<a href="https://github.com/veritem/eslint-plugin-vitest/commit/a554dd2">a554dd2</a>)</li>
</ul>
<h2>v0.5.2</h2>
<h3>Features</h3>
<ul>
<li><strong>no-focused-tests:</strong> add autofix (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/424">#424</a>) (<a href="https://github.com/veritem/eslint-plugin-vitest/commit/07be616">07be616</a>)</li>
</ul>
<h2>v0.5.1</h2>
<h3>Bug Fixes</h3>
<ul>
<li><strong>no-focused-tests:</strong> support .each template strings (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/420">#420</a>) (<a href="https://github.com/veritem/eslint-plugin-vitest/commit/36e5b9a">36e5b9a</a>)</li>
</ul>
<h2>v0.5.0</h2>
<h4>‼️ Breaking Change 🚨</h4>
<p>This version only supports new eslint flat config!</p>
<p>If you run into issues, consider downgrading and opening an issue. Remember to include a minimum repro example to help me fix issues quickly!</p>
<p><strong>Full Changelog</strong>: <a href="https://github.com/veritem/eslint-plugin-vitest/compare/v0.5.0...v0.5.0">https://github.com/veritem/eslint-plugin-vitest/compare/v0.5.0...v0.5.0</a></p>
<h2>v0.4.2-beta.5</h2>
<p>No release notes provided.</p>
<h2>v0.4.2-beta.4</h2>
<h3>Bug Fixes</h3>
<ul>
<li><strong>rules:</strong> replace <code>context</code> deprecations (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/416">#416</a>) (<a href="https://github.com/veritem/eslint-plugin-vitest/commit/575951c">575951c</a>)</li>
</ul>
<h2>v0.4.2-beta.3</h2>
<h3>Features</h3>
<!-- raw HTML omitted -->
</blockquote>
<p>... (truncated)</p>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/2d95ccffd9b6f3135cbbbbee0cdfa793581c9493"><code>2d95ccf</code></a> chore: release v0.5.4</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/2696f0dbaf0c08780f899082f7f429076575a9ac"><code>2696f0d</code></a> chore(legacy): add support for legacy configs (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/434">#434</a>)</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/0535b89f27a0dbf2f4ae7e9dfb28ee280f16e1b4"><code>0535b89</code></a> feat(cleanup): remove unnecessary files and updat deps (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/430">#430</a>)</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/58d2e781caf4cadb218979f61ed2095899e4fd2e"><code>58d2e78</code></a> chore: release v0.5.3</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/a554dd271033511f2a0fee0c277d1a6ca393b386"><code>a554dd2</code></a> fix: configs in plugin declaration file (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/428">#428</a>)</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/5ec480923291bd315201efc6adf133f30547a509"><code>5ec4809</code></a> typo (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/426">#426</a>)</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/f8f39f0ebe74728144106c93f65c911ca1c67801"><code>f8f39f0</code></a> Docs/readme (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/425">#425</a>)</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/1672d43cca6b2f5b689685c779ffb5c6c81a92f8"><code>1672d43</code></a> chore: release v0.5.2</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/07be61665979a4b993fb8b7311148986637bf636"><code>07be616</code></a> feat(no-focused-tests): add autofix (<a href="https://redirect.github.com/veritem/eslint-plugin-vitest/issues/424">#424</a>)</li>
<li><a href="https://github.com/veritem/eslint-plugin-vitest/commit/b082ce655cda927682dc4b4a259eb90c28d9b8a7"><code>b082ce6</code></a> chore: release v0.5.1</li>
<li>Additional commits viewable in <a href="https://github.com/veritem/eslint-plugin-vitest/compare/v0.3.26...v0.5.4">compare view</a></li>
</ul>
</details>
<br />

Updates `lint-staged` from 15.2.2 to 15.2.5
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/okonet/lint-staged/releases">lint-staged's releases</a>.</em></p>
<blockquote>
<h2>v15.2.5</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1424">#1424</a> <a href="https://github.com/lint-staged/lint-staged/commit/31a1f9548ea8202bc5bd718076711f747396e3ca"><code>31a1f95</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Allow approximately equivalent versions of direct dependencies by using the &quot;~&quot; character in the version ranges. This means a more recent patch version of a dependency is allowed if available.</p>
</li>
<li>
<p><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1423">#1423</a> <a href="https://github.com/lint-staged/lint-staged/commit/91abea0d298154d92113ba34bae4020704e22918"><code>91abea0</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Improve error logging when failing to read or parse a configuration file</p>
</li>
<li>
<p><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1424">#1424</a> <a href="https://github.com/lint-staged/lint-staged/commit/ee43f154097753dd5448766f792387e60e0ea453"><code>ee43f15</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Upgrade micromatch@4.0.7</p>
</li>
</ul>
<h2>v15.2.4</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://github.com/lint-staged/lint-staged/commit/4f4537a75ebfba816826f6f67a325dbc7f25908a"><code>4f4537a</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Fix release issue with previous version; update dependencies</li>
</ul>
<h2>v15.2.3</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1407">#1407</a> <a href="https://github.com/lint-staged/lint-staged/commit/d6981627472315adb01a46f797c8581393e8a637"><code>d698162</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Update dependencies</li>
</ul>
</blockquote>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/lint-staged/lint-staged/blob/master/CHANGELOG.md">lint-staged's changelog</a>.</em></p>
<blockquote>
<h2>15.2.5</h2>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1424">#1424</a> <a href="https://github.com/lint-staged/lint-staged/commit/31a1f9548ea8202bc5bd718076711f747396e3ca"><code>31a1f95</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Allow approximately equivalent versions of direct dependencies by using the &quot;~&quot; character in the version ranges. This means a more recent patch version of a dependency is allowed if available.</p>
</li>
<li>
<p><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1423">#1423</a> <a href="https://github.com/lint-staged/lint-staged/commit/91abea0d298154d92113ba34bae4020704e22918"><code>91abea0</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Improve error logging when failing to read or parse a configuration file</p>
</li>
<li>
<p><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1424">#1424</a> <a href="https://github.com/lint-staged/lint-staged/commit/ee43f154097753dd5448766f792387e60e0ea453"><code>ee43f15</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Upgrade micromatch@4.0.7</p>
</li>
</ul>
<h2>15.2.4</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://github.com/lint-staged/lint-staged/commit/4f4537a75ebfba816826f6f67a325dbc7f25908a"><code>4f4537a</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Fix release issue with previous version; update dependencies</li>
</ul>
<h2>15.2.3</h2>
<h3>Patch Changes</h3>
<ul>
<li><a href="https://redirect.github.com/lint-staged/lint-staged/pull/1407">#1407</a> <a href="https://github.com/lint-staged/lint-staged/commit/d6981627472315adb01a46f797c8581393e8a637"><code>d698162</code></a> Thanks <a href="https://github.com/iiroj"><code>@​iiroj</code></a>! - Update dependencies</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/lint-staged/lint-staged/commit/f7e410641c33a7dc7aa9da21254125ae0e2639d1"><code>f7e4106</code></a> chore(changeset): release</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/fc753030eaf6986b13b727f3c4a850d7c2c6511e"><code>fc75303</code></a> build(release): lower next version bump from minor to patch</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/91abea0d298154d92113ba34bae4020704e22918"><code>91abea0</code></a> fix: improve error logging when failing to parse config file (<a href="https://redirect.github.com/okonet/lint-staged/issues/1423">#1423</a>)</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/31a1f9548ea8202bc5bd718076711f747396e3ca"><code>31a1f95</code></a> build(deps): allow approximately equivalent versions of direct dependencies</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/ee43f154097753dd5448766f792387e60e0ea453"><code>ee43f15</code></a> build(deps): upgrade micromatch@4.0.7</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/8be6c8e7280ef4d819f0199830ec62c6bcda7e78"><code>8be6c8e</code></a> chore(changeset): release (<a href="https://redirect.github.com/okonet/lint-staged/issues/1419">#1419</a>)</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/4f4537a75ebfba816826f6f67a325dbc7f25908a"><code>4f4537a</code></a> build(husky): fix release issue with Husky</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/95d096d5643105704bb7f1b9f02140eb2e6503dd"><code>95d096d</code></a> chore(changeset): release (<a href="https://redirect.github.com/okonet/lint-staged/issues/1411">#1411</a>)</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/72483cb8a89bb74e96b45f9d67d3d4fecad22714"><code>72483cb</code></a> docs: fix typo (<a href="https://redirect.github.com/okonet/lint-staged/issues/1417">#1417</a>)</li>
<li><a href="https://github.com/lint-staged/lint-staged/commit/86fba6f11b962bbd2345764d629b553706d6c09e"><code>86fba6f</code></a> build(deps): update dependencies (<a href="https://redirect.github.com/okonet/lint-staged/issues/1418">#1418</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/okonet/lint-staged/compare/v15.2.2...v15.2.5">compare view</a></li>
</ul>
</details>
<br />

Updates `prettier` from 3.2.5 to 3.3.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/prettier/prettier/releases">prettier's releases</a>.</em></p>
<blockquote>
<h2>3.3.0</h2>
<p><a href="https://github.com/prettier/prettier/compare/3.2.5...3.3.0">diff</a></p>
<p>🔗 <a href="https://prettier.io/blog/2024/06/01/3.3.0.html">Release note</a></p>
</blockquote>
</details>
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/prettier/prettier/blob/main/CHANGELOG.md">prettier's changelog</a>.</em></p>
<blockquote>
<h1>3.3.0</h1>
<p><a href="https://github.com/prettier/prettier/compare/3.2.5...3.3.0">diff</a></p>
<p>🔗 <a href="https://prettier.io/blog/2024/06/01/3.3.0.html">Release Notes</a></p>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/prettier/prettier/commit/c4ab460357478d2b847c60a1efb40098b1181931"><code>c4ab460</code></a> Release 3.3.0</li>
<li><a href="https://github.com/prettier/prettier/commit/8a88cdce6d4605f206305ebb9204a0cabf96a070"><code>8a88cdc</code></a> Respect <code>trailingComma</code> in angular templates (<a href="https://redirect.github.com/prettier/prettier/issues/15926">#15926</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/c2e20fbae8ce1800ac0c8242c176d9379db5c001"><code>c2e20fb</code></a> chore(deps): update babel to v7.24.6 (<a href="https://redirect.github.com/prettier/prettier/issues/16326">#16326</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/41f1dffed08b33fe6d43da1e82d798b23ba0b57c"><code>41f1dff</code></a> Add newline between markdown footnote definitions (<a href="https://redirect.github.com/prettier/prettier/issues/16063">#16063</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/da5ad84bf441afd5c157bf83840814b1deaa39b1"><code>da5ad84</code></a> chore(deps): update babel to v7.24.6 (<a href="https://redirect.github.com/prettier/prettier/issues/16325">#16325</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/f790be81319a70f08942b1e3c12d68ee392d3269"><code>f790be8</code></a> chore(deps): update dependency file-entry-cache to v9 (<a href="https://redirect.github.com/prettier/prettier/issues/16324">#16324</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/7250556e287922508d9f28c12a82165a60bab5d7"><code>7250556</code></a> chore(deps): update dependency meriyah to v4.4.3 (<a href="https://redirect.github.com/prettier/prettier/issues/16323">#16323</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/96e057a0dc1efa7247b1c50843c9422a0ed66900"><code>96e057a</code></a> chore(deps): update dependency <code>@​angular/compiler</code> to v18 (<a href="https://redirect.github.com/prettier/prettier/issues/16322">#16322</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/a4ea5a2e2fcebe72315c9c0523b35bc79fe91405"><code>a4ea5a2</code></a> chore(deps): update dependency eslint-plugin-regexp to v2.6.0 (<a href="https://redirect.github.com/prettier/prettier/issues/16320">#16320</a>)</li>
<li><a href="https://github.com/prettier/prettier/commit/229006cd5b5178c195e5d66ce924d2b58bfde4ef"><code>229006c</code></a> chore(deps): update dependency micromatch to v4.0.7 (<a href="https://redirect.github.com/prettier/prettier/issues/16319">#16319</a>)</li>
<li>Additional commits viewable in <a href="https://github.com/prettier/prettier/compare/3.2.5...3.3.0">compare view</a></li>
</ul>
</details>
<br />

Updates `@graphql-codegen/typescript` from 4.0.6 to 4.0.7
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/typescript/CHANGELOG.md"><code>@​graphql-codegen/typescript</code>'s changelog</a>.</em></p>
<blockquote>
<h2>4.0.7</h2>
<h3>Patch Changes</h3>
<ul>
<li>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/dfc5310ab476bed6deaefc608f311ff368722f7e"><code>dfc5310</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/156cc2b9a2a5129beba121cfa987b04e29899431"><code>156cc2b</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/dfc5310ab476bed6deaefc608f311ff368722f7e"><code>dfc5310</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/b49457b5f29328d2dc23c642788a2e697cb8966e"><code>b49457b</code></a>]:
<ul>
<li><code>@​graphql-codegen/plugin-helpers</code><a href="https://github.com/5"><code>@​5</code></a>.0.4</li>
<li><code>@​graphql-codegen/visitor-plugin-common</code><a href="https://github.com/5"><code>@​5</code></a>.2.0</li>
</ul>
</li>
</ul>
</blockquote>
</details>
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/21fbf0db2ba7a560aeb0aa52e9b9bf792ac94227"><code>21fbf0d</code></a> chore(release): update monorepo packages versions (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/plugins/typescript/typescript/issues/9947">#9947</a>)</li>
<li><a href="https://github.com/dotansimha/graphql-code-generator/commit/227bb4240a91045172d72caee67a972f8487fa67"><code>227bb42</code></a> Fix linting issue (temporary solution) (<a href="https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/plugins/typescript/typescript/issues/9928">#9928</a>)</li>
<li>See full diff in <a href="https://github.com/dotansimha/graphql-code-generator/commits/@graphql-codegen/typescript@4.0.7/packages/plugins/typescript/typescript">compare view</a></li>
</ul>
</details>
<br />

Updates `@graphql-codegen/typescript-resolvers` from 4.0.6 to 4.1.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/dotansimha/graphql-code-generator/releases"><code>@​graphql-codegen/typescript-resolvers</code>'s releases</a>.</em></p>
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
<p><em>Sourced from <a href="https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/resolvers/CHANGELOG.md"><code>@​graphql-codegen/typescript-resolvers</code>'s changelog</a>.</em></p>
<blockquote>
<h2>4.1.0</h2>
<h3>Minor Changes</h3>
<ul>
<li><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9961">#9961</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/dfc5310ab476bed6deaefc608f311ff368722f7e"><code>dfc5310</code></a> Thanks <a href="https://github.com/eddeee888"><code>@​eddeee888</code></a>! - Update typescript-resolvers to report generated resolver types in the run to meta field in the output</li>
</ul>
<h3>Patch Changes</h3>
<ul>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9944">#9944</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/156cc2b9a2a5129beba121cfa987b04e29899431"><code>156cc2b</code></a> Thanks <a href="https://github.com/eddeee888"><code>@​eddeee888</code></a>! - Add _ prefix to generated <code>RefType</code> in <code>ResolversInterfaceTypes</code> and <code>ResolversUnionTypes</code> as it is sometimes unused</p>
</li>
<li>
<p><a href="https://redirect.github.com/dotansimha/graphql-code-generator/pull/9962">#9962</a> <a href="https://github.com/dotansimha/graphql-code-generator/commit/b49457b5f29328d2dc23c642788a2e697cb8966e"><code>b49457b</code></a> Thanks <a href="https://github.com/eddeee888"><code>@​eddeee888</code></a>! - Fix interface mappers not working in nested/self-referencing scenarios</p>
</li>
<li>
<p>Updated dependencies [<a href="https://github.com/dotansimha/graphql-code-generator/commit/dfc5310ab476bed6deaefc608f311ff368722f7e"><code>dfc5310</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/156cc2b9a2a5129beba121cfa987b04e29899431"><code>156cc2b</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/dfc5310ab476bed6deaefc608f311ff368722f7e"><code>dfc5310</code></a>, <a href="https://github.com/dotansimha/graphql-code-generator/commit/b49457b5f29328d2dc23c642788a2e697cb8966e"><code>b49457b</code></a>]:</p>
<ul>
<li><code>@​graphql-codegen/plugin-helpers</code><a href="https://github.com/5"><code>@​5</code></a>.0.4</li>
<li><code>@​graphql-codegen/visitor-plugin-common</code><a href="https://github.com/5"><code>@​5</code></a>.2.0</li>
<li><code>@​graphql-codegen/typ...

_Description has been truncated_

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/240)

----

### PR #224 - #220: Late list-select load
##### 2024-04-14

add a cache read to populate the current list value from the cache on load (if available)

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/224)

----

### PR #223 - #221: downgrade eslint to 8
##### 2024-04-14

Downgrades a few dependencies to go back to a working eslint state

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/223)

----

### PR #219 - Bump the development-dependencies group with 13 updates
##### 2024-04-12

Bumps the development-dependencies group with 13 updates:

| Package | From | To |
| --- | --- | --- |
| [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/eslint-plugin) | `7.3.1` | `7.6.0` |
| [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser) | `7.3.1` | `7.6.0` |
| [eslint](https://github.com/eslint/eslint) | `8.57.0` | `9.0.0` |
| [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) | `0.3.26` | `0.5.1` |
| [typescript](https://github.com/Microsoft/TypeScript) | `5.4.3` | `5.4.5` |
| [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/node) | `20.11.30` | `20.12.7` |
| [@graphql-codegen/client-preset](https://github.com/dotansimha/graphql-code-generator/tree/HEAD/packages/presets/client) | `4.2.4` | `4.2.5` |
| [@testing-library/dom](https://github.com/testing-library/dom-testing-library) | `9.3.4` | `10.0.0` |
| [@testing-library/react](https://github.com/testing-library/react-testing-library) | `14.2.2` | `15.0.0` |
| [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/react) | `18.2.69` | `18.2.75` |
| [@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/react-dom) | `18.2.22` | `18.2.24` |
| [glob](https://github.com/isaacs/node-glob) | `10.3.10` | `10.3.12` |
| [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) | `5.2.6` | `5.2.8` |

![](public/images/link.png) [Pull Request](https://github.com/jsaelhof/md4k/pull/219)

----

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