import { useState } from "react";
import "./tabs.scss";
import Editor from "@monaco-editor/react";

export default function Tabs() {
  const editor = [
    {
      name: "Javascript",
      color: "rgb(255, 202, 40)",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/javascript.svg",
      type: "lang",
      language: "javascript",
      content: `import Billy from "developers";

function HelloWorld() {
    return Billy.sayHello();
}
const hello = HelloWorld();

console.log(hello)
      `,
    },
    {
      name: "Typescript.ts",
      color: "rgb(2, 136, 209)",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/typescript.svg",
      type: "framework",
      language: "typescript",
      content: `import Billy from "developers";

function HelloWorld() {
    return Billy.sayHello();
}

type Hello = string;

const sayHello: Hello = HelloWorld();

console.log(sayHello)
      `,
    },
    {
      name: "Node.js",
      color: "rgb(139, 195, 74)",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/nodejs.svg",
      type: "framework",
      language: "javascript",
      content: `const Billy = require("developers");

function HelloWorld() {
    return Billy.sayHello();
}

const result = sayHello();
console.log(result);
`,
    },
    {
      name: "React.jsx",
      color: "#0288d1",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/react_ts.svg",
      type: "framework",
      language: "javascript",
      content: `import React from 'react';
import Billy from 'developers';

function HelloWorld() {
return <>{Billy.sayHello()}</>;
}

const sayHello = <HelloWorld />;

console.log(sayHello);
`,
    },
    {
      name: "Angular.ts",
      color: "rgb(229, 57, 53)",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/angular.svg",
      type: "framework",
      language: "typescript",
      content: `import { Component, OnInit } from '@angular/core';
import { DevelopersService } from './developers.service';

@Component({
selector: 'app-hello-world',
template: \`
    <p>{{ message }}</p>
\`,
})

export class HelloWorldComponent implements OnInit {
    message: string;

    constructor(private developersService: DevelopersService) {}

    ngOnInit(): void {
        this.message = this.developersService.sayHello();
    }
}
      
`,
    },
    {
      name: "VueJs.vue",
      color: "#41b883",
      icon: " https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/vue.svg",
      type: "framework",
      language: "javascript",
      content: `import Billy from 'developers';

Vue.component('hello-world', {
    template: '<div>{{ message }}</div>',
    data() {
        return {
            message: '',
        };
    },
    mounted() {
        this.message = Billy.sayHello();
    },
});

new Vue({
    el: '#app',
});
`,
    },
    {
      name: "Pyhon",
      color: "rgb(60, 120, 170)",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/python.svg",
      type: "lang",
      language: "python",
      content: `from billy import sayHello

def main():
    greeting = sayHello()
    print(greeting)

if __name__ == "__main__":
    main()
`,
    },
    {
      name: "Php",
      color: "rgb(30, 136, 229)",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/php.svg",
      type: "lang",
      language: "php",
      content: `<?php

    include 'Billy.php';

    function main() {
        $greeting = sayHello();
        echo $greeting;
    }

    main();
?>
`,
    },
    {
      name: "Java",
      icon: "https://pkief.vscode-unpkg.net/PKief/material-icon-theme/4.32.0/extension/icons/java.svg",
      type: "lang",
      language: "java",
      content: `import static your.package.Billy.sayHello; 

public class Main {
    public static void main(String[] args) {
        String greeting = Billy.sayHello();
        System.out.println(greeting);
    }
}
`,
    },
  ];

  const [openTab, setOpenTab] = useState("Javascript");

  return (
    <div className="editor">
      <header>Project - {openTab}</header>

      <div className="main">
        <div className="left">
          <div className="tabs">
            {editor.map((tab, i) => {
              return (
                <li>
                  <div
                    className="heading"
                    onClick={() => setOpenTab(tab.name)}
                    key={i}
                    style={{
                      paddingLeft: tab.type === "framework" ? "1.6rem" : "",
                      background: openTab === tab.name ? "#e0eeff14" : "",
                      borderBottom:
                        openTab === tab.name ? "2px solid var(--blue)" : "",
                    }}
                  >
                    <img src={tab.icon} />
                    <span>{tab.name}</span>
                  </div>
                </li>
              );
            })}
          </div>
        </div>

        <div className="right">
          {/* <Editor
            language={editor.find((e) => e.name === openTab)?.language}
            theme="vs-dark"
            value={editor.find((e) => e.name === openTab)?.content || ""}
            options={{
              inlineSuggest: true,
              fontSize: "18px",
              formatOnType: true,
              autoClosingBrackets: true,
              minimap: { scale: 0 },
              moduleResolution: "nodenext",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
