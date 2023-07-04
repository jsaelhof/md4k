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