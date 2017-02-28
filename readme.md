# stylefmt-loader

## Installation

`npm install --save-dev stylefmt stylefmt-loader`
or
`yarn add --dev stylefmt stylefmt-loader`

## Short Description

This loader is meant to be used before pre-processing your css. 
It fixes stylelint issues automatically while bundling with Webpack.
 
**During bundling, this loader will rewrite your css files with the corrections.**

## Usage

### Inline

```javascript
require("css!postcss!stylefmt!./file.css");
//or
require("css!sass!stylefmt!./file.scss");
//or any other preproccesor

```

### In webpack.config.js

```javascript
module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "css-loader",
          "sass-loader",
          "stylefmt-loader"
        ]
      }
    ]
  }
```

You can also specify your stylelint for stylefmt to use:

```javascript
module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "css-loader",
          "sass-loader",
          {
            loader: "stylefmt-loader",
            options: {
              config: ".stylelintrc"
            }
          }
        ]
      }
    ]
  }
```

**Your css before running webpack**

```scss
// mixin for clearfix


@mixin      clearfix    ()      { &:before,
&:after {
     content:" ";
     display              : table;  }

&:after        {clear: both;}
}.class
 {
     padding:10px;@include        clearfix();}
.base {  color: red;  }

// placeholder
%base
 {


     padding: 12px
 }

.foo{
@extend      .base;}

.bar
{     @extend            %base;

}
```

**Your css after running webpack**

```scss
// mixin for clearfix


@mixin clearfix() {
	&:before,
	&:after {
		content: " ";
		display: table;
	}

	&:after {
		clear: both;
	}
}

.class {
	padding: 10px;
	@include clearfix();
}

.base {
	color: red;
}

// placeholder
%base {
	padding: 12px;
}

.foo {
	@extend .base;
}

.bar {
	@extend %base;
}
```

## Want to help?

Please be specific in your issue. The code is not complex, why not proposing a PR?

### Running tests

Right now there's only one test and is kind of automated, a cleaner solution would be nice.

```
$> npm run test
```


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
