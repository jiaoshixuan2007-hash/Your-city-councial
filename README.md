# Your City Council

Your City Council is a civic information website that helps Toronto residents explore municipal decisions and understand how to participate in local government.

**Live website:** [Visit Your City Council](https://your-city-council-david.jiaoshixuan2007.chatgpt.site/)

## Project goals

Municipal decisions can be difficult to follow. Meeting agendas, staff reports and voting records often contain detailed information spread across multiple documents.

Our goal is to make that information easier to explore by presenting selected decisions in a clear, accessible format and linking back to official sources.

This is an independent project and is not affiliated with the City of Toronto.

## Features

- Browse selected council decisions by topic
- Explore sections for transportation, housing, taxes, news, infrastructure and council votes
- Read summaries with links to official sources
- Search and sort articles
- Save articles in the current browser
- Find information about participating in council meetings
- View selected information from Toronto Open Data

## Data and limitations

The project uses official City of Toronto sources, including:

- [Toronto Open Data](https://open.toronto.ca/)
- [Toronto City Council and committee meetings](https://secure.toronto.ca/council/)
- [How to participate in council meetings](https://www.toronto.ca/city-government/council/council-committee-meetings/participate/)

Article summaries are currently curated and **do not update automatically**. Official records should be checked for the latest decisions and any subsequent changes.

The website requests selected dataset information and voting records through backend endpoints. Availability and freshness depend on the City's data and services. This project does not currently provide a complete, real-time record of all municipal activity.

## Project structure

```text
Your-city-councial/
├── worker/
│   ├── index.html   # Page structure
│   ├── style.css    # Visual styles
│   ├── app.js       # Frontend interactions and content
│   └── server.js    # Backend request handling
├── scripts/
│   └── build.mjs    # Builds the server bundle
└── dist/            # Generated deployment files
```

## Preview the website locally

The simplest way to preview the frontend is:

1. Download or clone this repository.
2. Open the `worker` folder.
3. Open `index.html` in a web browser.
4. Edit the files in your preferred editor and save them.
5. Refresh the browser to see your changes.

> **Note:** Opening the HTML file directly is useful for a basic frontend preview. Features that depend on backend endpoints, including Toronto Open Data requests and voting records, may not work in this mode.

The server code is designed for a Worker-style runtime. A compatible local runtime or deployment is needed to test the backend endpoints.

## Working together

1. Pull the latest changes before starting work.
2. Make changes in a separate branch where possible.
3. Preview and test your changes.
4. Commit and push your branch to GitHub.
5. Open a pull request for your teammates to review.

Changes pushed to GitHub do **not currently deploy automatically** to the live website. The published site needs to be updated separately.

## Future improvements

- Expand coverage of council decisions and official meeting records
- Improve access to current information from official sources
- Add clearer timelines and participation deadlines
- Improve accessibility, mobile usability and translation
- Explore location-based features while minimizing collection of personal data
- Set up a shared development environment and automated deployment

## Official records

Summaries are provided to make information easier to understand. For the complete and authoritative details, follow the official source links provided on each article.
