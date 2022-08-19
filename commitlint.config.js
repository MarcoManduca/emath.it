//build: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: changes to out CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: documentation only changes
// feat: a new feature
// fix: fix a bug
// perf: a code change that improve performance
// refactoring: a code change that neither fixes a bug nor adds a feature
// style: changes that do not afect the meaning of the code (white-space, formatting, missing semi-colons, etc)
//test: adding missing tests or correcting existing tests

module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-leading-black" : [1, "always"],
        "body-max-line-length" : [2, "always", 100],
        "footer-leading-black": [1, "always"],
        "footer-max-line-length" : [2, "always", 100],
        "header-leading-black": [1, "always"],
        "header-max-line-length" : [2, "always", 100],
        "scope-case" : [2, "always", "lower-case"],
        "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
        "subject-empty" : [2, "never"],
        "subject-full-stop" : [2, "never", "."],
        "type-case" : [2, "never", "lower-case"],
        "type-empty" : [2, "never"],
        "type-enum" : [2, "always", ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refator", "revert", "style", "test", "translation", "security", "changeset"]]        
    }
}