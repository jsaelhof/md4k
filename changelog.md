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