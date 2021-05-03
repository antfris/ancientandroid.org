# How do you write markdown on this site?
<sub>A detailed guide to writing articles in this framework</sub>

<Ant date="2020-10-23">

Hi there. This is a sample page to demonstrate elements on this site.

## General Markdown
This site is written using a react component `markdown-to-jsx`. Traditional markdown can be used as well as custom React components `<Images>` and `<Audio>`.

## Audio Component

## \<Images> Component
Below you'll see the images plugin that was created for this site. You can optionally use [the normal image tag](#image).

### Default number of cols and height
```
<Images srv="001" src="
/modules/morphagene-top.jpg,
/modules/dualadsr-top.jpg,
/modules/morphagene-side.jpg
" />
```

<Images srv="001" src="
/modules/morphagene-top.jpg,
/modules/dualadsr-top.jpg,
/modules/morphagene-side.jpg
" />

### Specified number of cols
```
<Images srv="001" cols="2" src="
/modules/maths-side3.jpg,
/modules/pam-top.jpg,
/modules/plaits-side2.jpg
" />
```

<Images srv="001" cols="2" src="
/modules/maths-side3.jpg,
/modules/pam-top.jpg,
/modules/plaits-side2.jpg
" />


### Specified height
```
<Images srv="001" height="500px" src="
/modules/quadvca-side.jpg,
/modules/seqswitch-side.jpg,
/modules/wasp-side.jpg
" />
```

<Images srv="001" height="500px" src="
/modules/quadvca-side.jpg,
/modules/seqswitch-side.jpg,
/modules/wasp-side.jpg
" />

## Classic Markdown

### Horizontal rule
```
---
```
---

### Inline
```
***Bold & Italic***
**Bold**
*Italic*
~~Strike~~
[Link](/)
```
- ***Bold & Italic***
- **Bold**
- *Italic*
- ~~Strike~~
- [Link](/)

### Lists
```
- item 1;
- item 2.

1. First
1. Second
```
Unordered:

- item 1;
- item 2.

Ordered:

1. First
1. Second

### Code Blocks
\`\`\`
Fenced
\`\`\`

```
var nothing = "something";
```

\`Inline\` `code block`


### Blockquote
```
>
```
> “Quotes help us understand, inspire, motivate, clarify and show our approach to things around, this is why people and I love quotes.” — Takyou Allah Cheikh Malaynine

### Footnotes
```
Premise. [^1]

[^1]: Conclusion.
```
Footnotes are important. [^1]


### Image
Images are written `![alt text](url)` – although i'd recommed using the [\<Images>](#images-component) component instead.

`![alt text](http://localhost:8080/modules/wasp-side.jpg)`

### Tasklists
```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Tables
```
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |



[^1]: Fotnootes are important because it allows for extended text without builking out the main reading. It also offers a form of tangent.
