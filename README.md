# GoatscapingCo
goat landscaping company.

## Azure Static Web App deployment

This project can be deployed to **Azure Static Web Apps** using the included GitHub Actions workflow.

- The workflow file is at `.github/workflows/azure-static-web-apps.yml` and targets the `main` branch.
- The app root is the `GoatscapingCo` folder and is served as static files.

Steps to connect the repo to Azure Static Web Apps:

1. In the Azure Portal, create a new **Static Web App** and choose GitHub as the source.
2. Select this repository and the `main` branch. During the creation process, Azure will create the required GitHub Action and add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret for you.
3. If Azure does not add the secret automatically, get the deployment token from the Azure Static Web App resource and add a repository secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` in GitHub Settings → Secrets.
4. Push to `main` to trigger the GitHub Actions workflow and deploy the site.

If you want different app or output locations, edit `.github/workflows/azure-static-web-apps.yml` accordingly.
