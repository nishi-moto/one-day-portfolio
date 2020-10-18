# Dynamic Gallery

A one-day project that probably will grow. =]

## Briefing

I would like to have a place that centralizes the information about me and my works. But at the same time, I don't want to feed another portfolio, since I already have need to post them on popular platfoms as Instagram, Behance and Dribbble. So would be nice if my website was fed automatically by one of these sources.


### Requirements

- Should have a gallery.
- Should link my main social media links.
- Should generate data automatically.

### Resources
- As a gallery source,  [Dribbble API](https://developer.dribbble.com).
- For quick and high-quality icons, [Font Awesome](https://fontawesome.com), also using [Fort Awesome](https://fortawesome.com) for [React](https://reactjs.org).
- Uses [React](https://reactjs.org) and [Express](https://expressjs.com).



## How to Run


### 1. Dribbble

For this project, to have an account and a Gallery in Dribble is fundamenal. If you don't have, [please sign up](https://dribbble.com/signup/new) and populate your gallery.

 You will also need the API token. You can find more information about [here](https://developer.dribbble.com/v2/).


### 2. Backend
Before everything, make sure you have Node.js at least at version v14.5.0 by running `node -v` on your terminal.

 Next, rename the `.env_example` file to `.env` and fill in your Dribbble API token, and install the dependencies:
 ``` bash
cd backend
mv .env_example .env
npm run install
```
With your Dribbble token in place and express dependencies installed, you should be good to go. Just run `npm start` and your backend will be running.

### 3. Frontend
 As mentioned before, this project uses React in the Frontend. At you terminal, inside the frontend/client folder, run `yarn build`.

 After the build, run `yarn start`. 



