![alt text](https://github.com/mikesmith7810/supermarketswipe/blob/master/assets/images/supermarketswipesplash.png?raw=true)

###### - Please excuse the mispelling in the logo - ChatGPT cannot spell supermaket (sp)

## Supermarket Swipe

### A React Native project for learning. 

This is a **Work In Progress** and not the finished article. It could probably do with some refactoring and TLC. Plus, add in the fact that i had not touched React Native or Expo less than two weeks ago, they may be a couple of things which raise a few eye brows amongst seasoned app developers!

This is a shopping list app which will allow a user to create a list and then go shopping with it.

Developed using Expo Router.

Start up using locally and open in Xcode Simulator. 

### Local Running -

```
npx expo start --tunnel
```

### To deploy using Xcode -

At the moment, the loading of fonts causes an issue. But only when you build with Debug mode. Either update this to release like this - by editing the Scheme for the app and changing it to **Release**

Or edit the file -  _layout.tsx and update this section to comment out the font loading - 
(this will cause some icons to not appear)


```
const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  // const [loaded, error] = useFonts({
  //   ...FontAwesome.font,
  // });

  // const loaded = true;
  // const error = false;

```

Bundle the ios (and android) builds with this command - 

```
npx react-native bundle \
  --platform ios \
  --dev false \
  --entry-file node_modules/expo-router/entry.js \
  --bundle-output ios/main.jsbundle \
  --assets-dest ios \
  --reset-cache
  ```

Then load the project into Xcode, pair your device and using a (free) apple id as the account, you should be able to set the following deploy attributes.

(Note - that with a free apple account, the app will only be deployed for 7 days and you will have to redeploy it after this.) You can pay the $99/year to apple for the developer account if you so wish.

#### Team under Signing & Capabilites - 

eg - Mike Smith (Personal Team)

#### Bundle Identifier -

eg - com.mike.supermarketswipe

You should be able to then build using the arrow on the top right (i had to install an 8Gb IOS Simluator to get this button to enable) to either your paired device or a simulator.

## Using the App

The app is actually useful and was intended to help out with shopping trips! :-)

Create supermarket routes for categories through the store on the second tab. You can then select this or other stores as your saved store on tab 3.

Next, you can add new items you might want to purchase along with their category to the main front tab.

Once, this is done, you can then add items to your shopping list and they will magically order to your selected store. Changing your selected store will reorder them. Any items selected which the supermarket route does not have a category for will be added to an Unkown category section in the shopping list.

## Happy Shopping!!