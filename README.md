# Bobs's list

Bob loves to travel around the world and eat local food.
He also has a passion to make short notes and grades
for every city he has visited and food he tried there.

Usually, he makes a note with a city *name*,
the *date* when he's been there last time,
his *favourite dish* he ate there (its name and maybe some notes about it),
and the list of *grades*: simple marks of 1-10 for every dish he ate in that city
(you can refer to ListRecord type).

Help Bob implement an app to display the list of the Cities,
fauvorite dish there and the *average grade* for the food in the city.
(avg is rounded to two decimals or 0 if grades are missing)

Bob has already made a nice list and some cities' filter and the list ordering selector,
but for some reason they don't work.
Help him to fix that.
All components you need are in place, you just need to modify them so they work properly :)

All data is stored in `window.NotesStorage`.
You can get actual data by subscribing to the updates using NotesStorage.subscribe() method (example in App.tsx);
it returns the function that needs to be called to unsubscribe from the updates.

Sometimes Bob visits the city multiple times, so keep your list updated ;)

Beware that Bob loves to enjoy his food so much,
that sometimes he makes his notes in hurry to come to the airport in time.
That's why some data about the city may be incorrect.

PS. Bob's application starts from App.tsx. Also, please keep all pre-set data-attributes on components, so tests can pass.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/9cfe30b0-b1b4-4915-b8f4-96c4fb844415" target="_blank">this screen</a>.