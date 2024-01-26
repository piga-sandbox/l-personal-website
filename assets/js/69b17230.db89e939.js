"use strict";(self.webpackChunkdocusaurus_try_website=self.webpackChunkdocusaurus_try_website||[]).push([[5645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),l=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?s.createElement(g,r(r({ref:t},c),{},{components:n})):s.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,r[1]=u;for(var l=2;l<o;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var s=n(7462),a=(n(7294),n(3905));const o={slug:"add-giscus-to-docusaurus",title:"Adding Giscus to Docusaurus",authors:["ltuala"],tags:["giscus","docusaurus"],enableComments:!0},r=void 0,u={permalink:"/l-personal-website/add-giscus-to-docusaurus",source:"@site/blog/2023-12-15-add-giscus-to-docusaurus/index.mdx",title:"Adding Giscus to Docusaurus",description:"As I browse through different tech blog articles and able to read this, inspired me to add commenting system in this blog.",date:"2023-12-15T00:00:00.000Z",formattedDate:"December 15, 2023",tags:[{label:"giscus",permalink:"/l-personal-website/tags/giscus"},{label:"docusaurus",permalink:"/l-personal-website/tags/docusaurus"}],readingTime:1.635,hasTruncateMarker:!0,authors:[{name:"Lyndon Tuala",title:"Newbie",url:"https://github.com/ltuala",imageURL:"https://github.com/ltuala.png",key:"ltuala"}],frontMatter:{slug:"add-giscus-to-docusaurus",title:"Adding Giscus to Docusaurus",authors:["ltuala"],tags:["giscus","docusaurus"],enableComments:!0},prevItem:{title:"How to Setup Gogs",permalink:"/l-personal-website/setup-gogs"},nextItem:{title:"Ashabeneh's 30 Days of JavaScript",permalink:"/l-personal-website/30-days-of-js"}},i={authorsImageUrls:[void 0]},l=[{value:"Here&#39;s a step-by-step guide on how to add Giscus to Docusaurus:",id:"heres-a-step-by-step-guide-on-how-to-add-giscus-to-docusaurus",level:2},{value:"Install Giscus",id:"install-giscus",level:3},{value:"Enable Github Discussions",id:"enable-github-discussions",level:3},{value:"Giscus Configuration",id:"giscus-configuration",level:3},{value:"Generate BlogPostItem component",id:"generate-blogpostitem-component",level:3},{value:"Create your Blog",id:"create-your-blog",level:3},{value:"Test Your Docusaurus Site",id:"test-your-docusaurus-site",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,s.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As I browse through different tech blog articles and able to read ",(0,a.kt)("a",{parentName:"p",href:"https://ljvmiranda921.github.io/notebook/2021/08/08/clip-vqgan/"},"this"),", inspired me to add commenting system in this blog.\n",(0,a.kt)("img",{alt:"utterances",src:n(1930).Z,width:"764",height:"556"}),"This used ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/utterance/utterances"},"utterances"),", but I haven't found any reliable documentation on how to set it up on Docusaurus until I've stumbled upon ",(0,a.kt)("a",{parentName:"p",href:"https://giscus.app/"},"giscus"),"."),(0,a.kt)("h2",{id:"heres-a-step-by-step-guide-on-how-to-add-giscus-to-docusaurus"},"Here's a step-by-step guide on how to add Giscus to Docusaurus:"),(0,a.kt)("h3",{id:"install-giscus"},"Install Giscus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @giscus/react\n")),(0,a.kt)("h3",{id:"enable-github-discussions"},"Enable Github Discussions"),(0,a.kt)("p",null,"Discussion feature of Github can be seen ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository"},"here"),"."),(0,a.kt)("h3",{id:"giscus-configuration"},"Giscus Configuration"),(0,a.kt)("p",null,"Fill up necessary details ",(0,a.kt)("a",{parentName:"p",href:"https://giscus.app/"},"here")," to acquire giscus configuration. Look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://giscus.app/client.js"\n        data-repo="[ENTER REPO HERE]"\n        data-repo-id="[ENTER REPO ID HERE]"\n        data-category="[ENTER CATEGORY NAME HERE]"\n        data-category-id="[ENTER CATEGORY ID HERE]"\n        data-mapping="pathname"\n        data-strict="0"\n        data-reactions-enabled="1"\n        data-emit-metadata="0"\n        data-input-position="bottom"\n        data-theme="preferred_color_scheme"\n        data-lang="en"\n        crossorigin="anonymous"\n        async>\n<\/script>\n')),(0,a.kt)("h3",{id:"generate-blogpostitem-component"},"Generate BlogPostItem component"),(0,a.kt)("p",null,"Run this comand in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run swizzle [theme name] [component name] -- --wrap\n\n# Example:\nnpm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap\n")),(0,a.kt)("p",null,"It will generate a BlogPostItem component under ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme"),". Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { useBlogPost } from '@docusaurus/theme-common/internal'\nimport BlogPostItem from '@theme-original/BlogPostItem';\nimport GiscusComponent from '@site/src/components/GiscusComponent';\nimport useIsBrowser from '@docusaurus/useIsBrowser';\n\nexport default function BlogPostItemWrapper(props) {\n  const { metadata, isBlogPostPage } = useBlogPost()\n  const isBrowser = useIsBrowser();\n\n  const { frontMatter, slug, title } = metadata\n  const { enableComments } = frontMatter\n\n  return (\n    <>\n      <BlogPostItem {...props} />\n      {(enableComments && isBlogPostPage) && (\n        <GiscusComponent />\n      )}\n    </>\n  );\n}\n")),(0,a.kt)("h3",{id:"create-your-blog"},"Create your Blog"),(0,a.kt)("p",null,"On your markdown file, add ",(0,a.kt)("inlineCode",{parentName:"p"},"enableComments")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Title of blog\nauthors: author\ntags: [tagOne, tagTwo]\nenableComments: true # To enable Giscus\n---\n")),(0,a.kt)("h3",{id:"test-your-docusaurus-site"},"Test Your Docusaurus Site"),(0,a.kt)("p",null,"Run your Docusaurus development server to test the changes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"Open your browser and navigate to the page where you added the Giscus comments section.\nCheck if the comments section is displayed and functional."),(0,a.kt)("admonition",{title:"Congratulations!",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You have successfully added Giscus to your Docusaurus site, allowing users to leave comments using their GitHub accounts.")))}d.isMDXComponent=!0},1930:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/utterances-3a31558c9826bf5d2e6ed53305a27016.png"}}]);