## Ionic Framework v3 with Semantic UI based on   <a href="https://edcarroll.github.io/ng2-semantic-ui/">ng2-semantic-ui</a>

This repository provide you to use Semantic UI locally in your Ionic Framework projects.

## Installation 
<p>To install this library, run:</p>
<demo-codeblock language="bash" _nghost-c7="">
<pre>npm <span class="token function">install</span> ng2-semantic-ui --save</pre>
</demo-codeblock>
<p>Copy "semanticui" folder to your projects assets folder</p>    
<p>Next include the Semantic UI CSS file in your <code>variables.scss</code></p>
<p>Finally you need to import the main module:</p>
<demo-codeblock  language="typescript">
<pre><span>import</span> <span>{</span>SuiModule<span>}</span> from <span>'ng2-semantic-ui'</span><span>;</span>

@<span>NgModule</span><span>(</span><span>{</span>
    declarations<span>:</span> <span>[</span>AppComponent<span>,</span> <span>.</span><span>.</span><span>.</span><span>]</span><span>,</span>
    imports<span>:</span> <span>[</span>SuiModule<span>,</span> <span >.</span><span>.</span><span>.</span><span>]</span><span>,</span>  
    bootstrap<span>:</span> <span >[</span>AppComponent<span>]</span>
<span>}</span><span>)</span>
<span>export</span> <span>class</span> <span>AppModule</span> <span>{</span><span>}</span>
</pre>
</demo-codeblock>

## Notes

In the transition modules some animations don't work properly.("jiggle", "flash", "shake", "pulse", "tada", "bounce" )


## Component Support

|           Icon          |                                      Description                                    |
|-------------------------|-------------------------------------------------------------------------------------|
| :white_check_mark:      | Component supported by ng2-semantic-ui.                                             |
| :rocket:                | Semantic UI plugin supported by ng2-semantic-ui (not in Semantic UI Core).          |
| :ballot_box_with_check: | Component supported natively by [Semantic UI](https://semantic-ui.com/) (CSS only). |
| :x:                     | Component currently unavailable.                                                    |
| :no_entry_sign:         | Component not applicable to Angular.                                                |

|              Elements              |            Collections             |                   Views                  |              Modules              |              Behaviors              |
|------------------------------------|------------------------------------|------------------------------------------|-----------------------------------|-------------------------------------|
| :ballot_box_with_check: Button     | :ballot_box_with_check: Breadcrumb | :ballot_box_with_check: Advertisment     | :white_check_mark: Accordion      | :no_entry_sign: API                 |
| :ballot_box_with_check: Container  | :ballot_box_with_check: Form       | :ballot_box_with_check: Card             | :white_check_mark: Checkbox       | :no_entry_sign: Form Validation     |
| :ballot_box_with_check: Divider    | :ballot_box_with_check: Grid       | :ballot_box_with_check: Comment          | :rocket: Collapse                 | :rocket: Localization               |
| :ballot_box_with_check: Flag       | :ballot_box_with_check: Menu       | :ballot_box_with_check: Feed             | :rocket: Datepicker               | :x: Visibiltiy                      |
| :ballot_box_with_check: Header     | :white_check_mark: Message         | :ballot_box_with_check: Item             | :white_check_mark: Dimmer         |                                     |
| :ballot_box_with_check: Icon       | :rocket: Pagination                | :ballot_box_with_check: Statistic        | :white_check_mark: Dropdown       |                                     |
| :ballot_box_with_check: Image      | :ballot_box_with_check: Table      |                                          | :x: Embed                         |                                     |
| :ballot_box_with_check: Input      |                                    |                                          | :white_check_mark: Modal          |                                     |
| :ballot_box_with_check: Label      |                                    |                                          | :white_check_mark: Popup          |                                     |
| :ballot_box_with_check: List       |                                    |                                          | :white_check_mark: Progress       |                                     |
| :ballot_box_with_check: Loader     |                                    |                                          | :white_check_mark: Rating         |                                     |
| :ballot_box_with_check: Rail       |                                    |                                          | :white_check_mark: Search         |                                     |
| :ballot_box_with_check: Reveal     |                                    |                                          | :x: Shape                         |                                     |
| :ballot_box_with_check: Segment    |                                    |                                          | :white_check_mark: Sidebar        |                                     |
| :ballot_box_with_check: Step       |                                    |                                          | :x: Sticky                        |                                     |
|                                    |                                    |                                          | :white_check_mark: Tab            |                                     |
|                                    |                                    |                                          | :white_check_mark: Transition     |                                     |
