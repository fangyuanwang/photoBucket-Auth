// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDeVroMh_Gma03aBCnReTIoXVzE2cWrxyc",
    authDomain: "wangf-photobucket-auth.firebaseapp.com",
    databaseURL: "https://wangf-photobucket-auth.firebaseio.com",
    projectId: "wangf-photobucket-auth",
    storageBucket: "wangf-photobucket-auth.appspot.com",
    messagingSenderId: "52931164216"
  },
  registryToken: '602ba971-7e69-4db6-bd44-699ac2581d29',
};
