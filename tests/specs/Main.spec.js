import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme'
import FullHeader from '../../src/FullHeader'

chai.use(chaiEnzyme())

describe('Component Full Header', () => {

    context('title', () => {
        it('should have header when mount', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('header')).to.have.length(1)
        })

        it('should have h1 when pass title', () => {
           const wrapper = shallow(<FullHeader title='Hello Word' />)
           expect(wrapper.find('h1')).to.have.length(1)
        })

        it('should not have h1 if not pass title', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('h1')).to.have.length(0)
        })

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="Hello Word" />)
            expect(wrapper.find('h1').props().children).to.be.equal('Hello Word')
        })
    })

    context('subtitle', () => {
        it('should have h2 when pass subtitle', () => {
           const wrapper = shallow(<FullHeader subtitle="I like this language" />)
           expect(wrapper.find('h2')).to.have.length(1)
        })

        it('should not have h2 when not pass subtitle', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('h2')).to.have.length(0)
         })

        it('should have h2 tag with the subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="I like this language" />)
            expect(wrapper.find('h2').props().children).to.be.equal('I like this language')
        })
    })

    context("bgColor", () => {
        it("should have background-color equal #ccc when none is passed", () => {
            const wrapper = shallow(<FullHeader title="Hello Word" />)
            expect(wrapper).to.have.style('background-color').equal('#ccc')
        })

        it("should have background-color equal #3299BB when pass bgColor", () => {
            const wrapper = shallow(<FullHeader title="Hello Word" bgColor="#3299BB" />)
            expect(wrapper).to.have.style('background-color').equal('#3299BB')
        })
    })

    context("textColor", () => {
        it("should have color equal #000 when none is passed", () => {
            const wrapper = shallow(<FullHeader title="Hello Word" />)
            expect(wrapper).to.have.style('color').equal('#000')
        })

        it("should have color equal #fff when pass textColor", () => {
            const wrapper = shallow(<FullHeader title="Hello Word" textColor="#fff" />)
            expect(wrapper).to.have.style('color').equal('#fff')
        })
    })

    context("font", () => {
        it("should have font-family equal 'sans-serif' when none is passed", () => {
            const wrapper = shallow(<FullHeader title="Hello Word" subtitle="I like this language" />)
            expect(wrapper).to.have.style('font-family').equal('sans-serif')
        })

        it("should have font-family equal 'cursive' when pass font", () => {
            const wrapper = shallow(<FullHeader title="Hello Word"  subtitle="I like this language" font="cursive" />)
            expect(wrapper).to.have.style('font-family').equal('cursive')
        })
    })

    context("bgImg", () => {
        it("should have background-image equal empty when none is passed", () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper).to.have.style('background-image').equal('url()')
        })

        it("should have background-image when pass bgImg", () => {
            const wrapper = shallow(<FullHeader bgImg="https://images.unsplash.com/photo-1517650862521-d580d5348145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />)
            expect(wrapper).to.have.style('background-image').equal("url(https://images.unsplash.com/photo-1517650862521-d580d5348145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)")
        })
    })

    context("video", () => {
        it("should have video tag when video is passed", () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />)
            expect(wrapper.find('video')).to.have.length(1)
        })

        it("should not have video tag when video is not passed", () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('video')).to.have.length(0)
        })

        it("should have video tag with the video passed", () => {
            const wrapper = shallow(<FullHeader video="Sunset-Desert-Run.mp4" />)
            expect(wrapper.find('video').props().src).to.be.equal('Sunset-Desert-Run.mp4')
        })
    })
})
