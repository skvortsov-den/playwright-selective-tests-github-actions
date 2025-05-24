# playwright-selective-tests-github-actions

This repository demonstrates an example of a GitHub Action for selective running of e2e tests in a monorepo based on changed files in PR.

For a detailed description of the mechanism, check out the article [Selective test execution mechanism with Playwright using GitHub Actions](https://dev.to/denis_skvortsov/selective-test-execution-mechanism-with-playwright-using-github-actions-32dp-temp-slug-6919438).

## Project Structure

```
/
├── frontend/            # Frontend applications
│   └── apps/            # Frontend microservices
│       ├── microservice1/
│       └── microservice2/
├── backend/            # Backend services
│   └── apps/           # Backend microservices
│       ├── microservice3/
│       ├── microservice4/
│       └── microservice5/
├── .github/             # GitHub Actions
│   ├── workflows/       # CI/CD configuration
│   │   └── e2e-runner.yml # Selective test runner
│   └── preconditions/   # Reusable actions
│       └── e2e/        # E2E tests environment setup
│           └── action.yml # Composite action for environment setup
└── tests/               # Tests
    └── e2e/             # E2E tests
        ├── api/         # API tests
        ├── ui/          # UI tests
        ├── src/         # Helper code
        └── fixtures.ts  # Test Fixtures
```

## E2E Tests

The project uses Playwright for e2e testing. The example includes:
- Docker container with pre-installed Playwright (`mcr.microsoft.com/playwright:v1.52.0`)
- 6 minutes timeout for demonstration purposes

## GitHub Action for Selective Test Running

The Action analyzes PR changes and makes a decision about test execution:

1. **Changes Analysis**:
   - Detects modified services in `/apps`
   - Checks changes in e2e tests
   - Analyzes changes in shared modules

2. **Execution Strategy**:
   - If shared modules or e2e tests are affected → run all tests
   - If changes are only in specific services → run tests only for those services
   - Uses grep to filter tests by affected services

### Test Execution Scenarios

1. **Changes in shared modules**:
   ```
   /apps/shared/* → Run ALL tests
   ```
   Since shared modules can affect all services, we run the full test suite

2. **Changes in e2e tests**:
   ```
   /tests/e2e/* → Run ALL tests
   ```
   When tests are modified, we also run the full suite to check for regressions

3. **Combinations with shared**:
   ```
   /apps/shared/* → ALL tests
   /apps/shared/* + /tests/e2e/* → ALL tests
   /apps/shared/* + /apps/microservice1/* → ALL tests
   /apps/shared/* + /apps/new-service/* → ALL tests
   ```
   Any change in shared modules leads to full test run

4. **Combinations with e2e tests**:
   ```
   /tests/e2e/* → ALL tests
   /tests/e2e/* + /apps/microservice1/* → ALL tests
   /tests/e2e/* + /apps/new-service/* → ALL tests
   ```
   Any change in tests leads to full test run

5. **Changes in microservices**:
   ```
   /apps/microservice1/* → @microservice1
   /apps/microservice2/* → @microservice2
   /apps/microservice3/* → @microservice3
   /apps/microservice4/* → @microservice4
   /apps/microservice5/* → @microservice5
   ```
   Only tests with corresponding tags are executed

6. **Microservices combinations**:
   ```
   /apps/microservice1/* + /apps/microservice2/* → @microservice1 || @microservice2
   /apps/microservice1/* + /apps/microservice2/* + /apps/microservice3/* → @microservice1 || @microservice2 || @microservice3
   ```
   Tests are run for all modified services

7. **Non-existent tags**:
   ```
   /apps/new-service/* → Empty grep, tests pass successfully
   ```
   If service is new and has no tests, we consider it a valid case

8. **Combinations with new services**:
   ```
   /apps/new-service1/* + /apps/new-service2/* → Empty grep, tests pass successfully
   /apps/microservice1/* + /apps/new-service/* → @microservice1
   /apps/new-service/* + /apps/shared/* → ALL tests
   /apps/new-service/* + /tests/e2e/* → ALL tests
   ```
   New services are ignored (if no tests with such tag exist), but shared or e2e changes still trigger full run

9. **Complex combinations**:
   ```
   /apps/microservice1/* + /apps/shared/* + /tests/e2e/* → ALL tests
   /apps/microservice1/* + /apps/microservice2/* + /apps/shared/* → ALL tests
   /apps/microservice1/* + /apps/new-service/* + /tests/e2e/* → ALL tests
   /apps/new-service/* + /apps/shared/* + /tests/e2e/* → ALL tests
   ```
   When shared or e2e changes are present, all tests are always run regardless of other changes

For more details about the e2e test architecture approach, you can read the article [Simple and Effective E2E Test Architecture with Playwright and TypeScript](https://www.linkedin.com/pulse/simple-effective-e2e-test-architecture-playwright-denis-skvortsov-hv5pf/).

## Getting Started

1. Install dependencies:
```bash
npm install
npx playwright install
```

2. Run tests:
```bash
npx playwright test
```
