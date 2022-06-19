const { registerBlockType } = wp.blocks;
const { 
    RichText,
    InspectorControls,
    InspectorAdvancedControls,
    ColorPalette,
    BlockControls,
    AlignmentToolbar
} = wp.editor;
const { PanelBody,
        TextControl,
        SelectControl
} = wp.components;

 
registerBlockType('bproject/custom-btn', {

    // built-in attributes

    title: 'Task Button',
    description: 'It is just a simple button',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        buttonAlignment: {
            type: 'string',
            default: 'none',
        },
        buttonText: {
            type: 'string'
        },
        buttonBackground: {
            type: 'string',
            default: '#329ea9'
        },
        buttonColor: {
            type: 'string',
            default: '#ffffff'
        },
        positionButton: {
            type: 'string',
        }
    },

    // custom functions

    // built-in functions

    edit: ( { attributes, setAttributes } ) => {

        const { buttonAlignment,
                buttonText,
                buttonBackground,
                buttonColor,
                positionButton
            } = attributes;

        function onButtonTextChange(newButtonText){
            setAttributes( { buttonText: newButtonText } );
        }

        function onButtonBackgroundChange(newBackground) {
            setAttributes( { buttonBackground: newBackground } )
        }

        function onButtonColorChange(newButtonColor) {
            setAttributes( { buttonColor: newButtonColor } )
        }

        function buttonAlignmentChange(newButtonAlignment) {
            setAttributes( { buttonAlignment: newButtonAlignment = undefined ? 'none' : newButtonAlignment } )
        }

        function buttonPositionChange(newButtonPosition) {
            setAttributes( { positionButton: newButtonPosition } )
        }

        return ([
            <InspectorControls style={ { marginBottom: '32px' } }>

                <PanelBody title={ 'Button Setting' }>
                    <p><strong>Button Text:</strong></p>
                    <TextControl value={ buttonText } onChange={ onButtonTextChange } />

                    <p><strong>Button Background:</strong></p>
                    <ColorPalette value={ buttonBackground } onChange={ onButtonBackgroundChange } />

                    <p><strong>Button Color:</strong></p>
                    <ColorPalette value={ buttonColor } onChange={ onButtonColorChange } />

                    <p><strong>Button Position:</strong></p>

                    <SelectControl
							label="Button Position"
							value={ positionButton }
							options={ [
								{ value: 'flex-start', label: 'flex-start' },
								{ value: 'center', label: 'center' },
								{ value: 'flex-end', label: 'flex-end' },
							] }
							onChange={ buttonPositionChange }
                    />

                </PanelBody>
            </InspectorControls>,

            <InspectorAdvancedControls>
            <TextControl
                label="HTML anchor"
                value={ attributes.anchor }
                onChange={ ( nextValue ) => {
                    setAttributes( {
                        anchor: nextValue,
                    } );
                } }
            />
            </InspectorAdvancedControls>,

            <div className="container"  style={ { 
                                        display: 'flex',
                                        justifyContent: positionButton
            } }>
                {
                    <BlockControls>
                        <AlignmentToolbar value={ buttonAlignment } onChange= { buttonAlignmentChange } />
                    </BlockControls>
                }
                <RichText   key="editable"
                            tagName="div"
                            placeholder="Add Button Text..."
                            value={ buttonText }
                            onChange= { onButtonTextChange }
                            className= "task-button"
                            style={ {   background: buttonBackground,
                                        color: buttonColor,
                                        textAlign: buttonAlignment,
                                        display: "inline-flex",
                                        flexDirection: "row",
                                        padding: '16px 32px',
                                        alignItems: 'center',
                                        borderRadius: '3px', } } />
            </div>
        ]);
    },

    save: ( { attributes } ) => {

        const { buttonAlignment,
            buttonText,
            buttonBackground,
            buttonColor,
            positionButton
        } = attributes;

        return (
            <div class="container" style={ { 
                display: 'flex',
                justifyContent: positionButton
            } }>
                <button className= "task-button" style={ { 
                    background: buttonBackground,
                    color: buttonColor,
                    textAlign: buttonAlignment,
                    display: "inline-block",
                    padding: '16px 32px',
                    borderRadius: '3px',
                    border: 'none'
                 } }>
                    { buttonText }</button>
            </div>
        );
    }
})
