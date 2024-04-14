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