# React Full Header

Udemy course: https://www.udemy.com/js-com-tdd-na-pratica

A header component for React.

## Installation

```sh
$ npm install --save rblima0-react-full-header
```

## Basic Usage

```jsx
import FullHeader from 'rblima0-react-full-header';

...
render() {
    return (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
            bgColor="#3299BB"
            textColor="#fff"
            font="cursive"
            video="https://storage.googleapis.com/coverr-main/mp4/Sunset-Desert-Run.mp4"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `textColor` (string) - texts color
- `font` (string) - font-family to texts
- `bgImg` (string) - image to background
- `video` (string) - video to background

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md)
