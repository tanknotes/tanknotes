# tanknotes

> Tanknotes for World of Warcraft

## Initial Build Setup

- [x] install node
- [x] install git

``` bash
# clone repo
git clone https://github.com/joshinat0r/tanknotes.git

# install dependencies
npm install
```

## Make changes

- open `/src/data/RAIDS.js`
- add raid & boss
- add for each boss a .md file in the /markdown-folder and add the path to the `content`-prop in `RAIDS.js`
- write the markdown

## Markdown

Basic markdown: https://guides.github.com/features/mastering-markdown/ 

Custom attributes for markdown: https://github.com/arve0/markdown-it-attrs 

Custom containers: https://github.com/markdown-it/markdown-it-container 

#### Custom attributes
Custom attribute | Function
-----------------|------
{.spec-blood}|only visible for Blood Death Knights
{.spec-brew}|only visible for Brewmaster Monks
{.spec-veng}|only visible for Vengeance Demon Hunters
{.spec-pprot}|only visible for Protection Paladins
{.spec-wprot}|only visible for Protection Warriors
{.spec-guard}|only visible for Guardian Druids
{.custom-class}|adds `.custom-class` to the element (read style section) 

#### Custom containers
```
::: div warn
more *markdown*
:::
```
Adds a div with the class `warn` and the content `more *markdown*`. Can be styled with CSS-classes

#### Custom styles
- **Option 1** apply a custom class to the markdown element
  - by using `{.custom-class}` or a custom container
  - add the used class to the `/src/style.css`-file and define the styling

    *Example*:
    ```
    This text is supposed to be purple {.purple-text}
    This text is supposed to be red {.red-text}
    ```

    *Example CSS for the `/src/style.css`-file*
    ```css
    .purple-text {
      color: purple;
      /* additional styles */
    }

    .red-text {
      color: #FF0000;
    }
    ```

- **Option 2** use HTML in the markdown-file
  - apply inline styling to the HTML-element
  - apply a class to the HTML-element and add the class to the `/src/style.css`

## Push changes
``` bash
# run local version of the site
npm run dev

# make changes

# build for production with minification
npm run build

# commit changes to the git repo
git add .
git commit -m "my fancy commit message"
git push

# update git-page (from git bash -- doesn't work in CMD)
npm run deploy
```
 
