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