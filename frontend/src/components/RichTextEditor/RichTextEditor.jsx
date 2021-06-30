import React from "react";
import { Editor, EditorState, RichUtils} from "draft-js";

import { Button, Icon } from "semantic-ui-react";
import 'draft-js/dist/Draft.css';
import './editor.css'

import { stateToHTML } from "draft-js-export-html";



const STYLE_TYPE = 'style'
const LIST_TYPE = 'list'
const ENTITY_TYPE = 'entity'

const allTransactions = [
	{
		iconName: "bold",
		toggle: "BOLD",
		type: STYLE_TYPE
	},
	{
		iconName: "underline",
		toggle: "UNDERLINE",
		type: STYLE_TYPE
	},
	{
		iconName: "italic",
		toggle: "ITALIC",
		type: STYLE_TYPE
	},
	{
		iconName: "list ol",
		toggle: "ordered-list-item",
		type: LIST_TYPE
	},
	{
		iconName: "list ul",
		toggle: "unordered-list-item",
		type: LIST_TYPE
	},
	{
		iconName: "header",
		toggle: "header-two",
		type: LIST_TYPE
	},
	
]

//Yasin T.

class RichTextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.editorRef = React.createRef()
		this.val = ""
		this.state = {
			editorState: EditorState.createEmpty()
		};
	}
	onChange = editorState => {
		this.setState({
			editorState
		}, () => {this.handleCallBack()});
		
	};

	//Yasin T.

	handleCallBack = () => {
		this.val = stateToHTML(this.state.editorState.getCurrentContent())
		//console.log(this.val)
		this.props.textValue(this.val)
	}

	handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			this.state.editorState,
			command
		);
		
		if (newState) {
			this.onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

	toggleType = (toggle) => {
		switch (toggle.type) {
			case STYLE_TYPE:
				return RichUtils.toggleInlineStyle(this.state.editorState, toggle.toggle)
			case LIST_TYPE:
				return RichUtils.toggleBlockType(this.state.editorState, toggle.toggle)
			case ENTITY_TYPE:
				return RichUtils.toggleLink(this.state.editorState, toggle.toggle)
		}		
	}

	toggleClick = (toggle) => {
		this.onChange(
			this.toggleType(toggle)			
		)
	}

	render() {
		
		return (
			<div className="editor">
				<div className="editorContainer w-full">
					<div className="editorBtnGroup">
						<Button.Group>
							{
								allTransactions.map(transaction => (
									<Button type="button" icon onClick={()=>this.toggleClick(transaction)}>
										<Icon name={transaction.iconName} />
									</Button>
								))
							}
						</Button.Group>
					</div>
					<div className="mainEditor">
						<Editor
							placeholder="Zengin metin editörü"
							editorState={this.state.editorState}
							handleKeyCommand={this.handleKeyCommand}
							onChange={this.onChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default RichTextEditor;
