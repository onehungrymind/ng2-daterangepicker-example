const barrels: string[] = [
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  'rxjs',
  'ng2-daterangepicker',
  'app'
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

declare var System: any;

System.config({
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'ng2-daterangepicker': 'node_modules/ng2-daterangepicker',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});
