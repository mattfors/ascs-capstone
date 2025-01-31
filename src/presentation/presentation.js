import { Marp } from '@marp-team/marp-core';

async function loadPresentation() {
    const markdown = await import('./slides.md');
    const marp = new Marp();
    const { html, css } = marp.render(markdown.default);
    document.body.innerHTML = `<style>${css}</style>${html}`;
}

loadPresentation();
