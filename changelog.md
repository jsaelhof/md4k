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