import { View, Text, ViewStyle, StyleProp, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../../styles/globalStyles'
import { appColors } from '../../../constants/appColors'
import { TextComponent } from '../../../components'
import { fontFamilies } from '../../../constants/fontFamilies'

interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    textFont?: string,
    onPress?: () => void,
    iconFlex?: 'right' | 'left',
    disable?: boolean
}

const ButtonOrderComponent = (props: Props) => {
    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex, textFont, disable } = props
    return type === 'primary' ? (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                disabled={disable}
                onPress={onPress}
                style={[
                    globalStyles.shadow,
                    globalStyles.button, {
                        backgroundColor: color ? color : disable ? appColors.gray4 : appColors.primary,
                        marginBottom: 17,
                        width: '90%'
                    }, styles
                ]}>
                {icon && iconFlex === 'left' && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColors.gray}
                    styles={[textStyles, {
                        marginLeft: icon ? 12 : 0,
                        fontSize: 13,
                        textAlign: 'center'
                    }]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font={textFont ?? fontFamilies.medium}

                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        </View>

    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent
                text={text}
                color={type === 'link' ? appColors.primary : appColors.text}
            />
        </TouchableOpacity>
    )
}

export default ButtonOrderComponent