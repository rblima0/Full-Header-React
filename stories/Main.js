import React from 'react';
import FullHeader from '../src/FullHeader'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Component Full Header ', module)
    .add('with title', () => (
        <FullHeader title="Hello Word" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
        />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
            bgColor="#3299BB"
            textColor="#fff"
        />
    ))
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
            bgColor="#3299BB"
            textColor="#fff"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
            textColor="#fff"
            bgImg="https://images.unsplash.com/photo-1517650862521-d580d5348145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="Hello Word"
            subtitle="I like this language"
            textColor="#fff"
            video="https://storage.googleapis.com/coverr-main/mp4/Sunset-Desert-Run.mp4"
        />
    ))
