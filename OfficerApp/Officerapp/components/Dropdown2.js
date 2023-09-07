import React from "react";
import { GluestackUIProvider,config } from "@gluestack-ui/themed";
import { Button, ButtonText,ButtonIcon,AddIcon } from '@gluestack-ui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { Select,SelectTrigger,SelectInput,SelectIcon,Icon,SelectPortal,SelectBackdrop,SelectContent,SelectDragIndicatorWrapper,SelectDragIndicator,
SelectItem,ChevronDownIcon} from '@gluestack-ui/themed';
const Dropdown2 = (navigation) => {
    return (
        <View styles = {styles.container}>


        {/* <Text>Vehicle Details</Text> */}
        <GluestackUIProvider config={config.theme}>
            
        <Select>
          <SelectTrigger variant="rounded" size="md" >
            <SelectInput placeholder="Select option" />
            <SelectIcon mr="$3">
              <Icon as={ChevronDownIcon} />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop/>
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="UX Research" value="ux" />
              <SelectItem label="Web Development" value="web" />
              <SelectItem
                label="Cross Platform Development Process"
                value="Cross Platform Development Process"
              />
              <SelectItem
                label="UI Designing"
                value="ui"
                isDisabled={true}
              />
              <SelectItem
                label="Backend Development"
                value="backend"
              />
            </SelectContent>
          </SelectPortal>
        </Select>
      
        </GluestackUIProvider>

        </View>

       


    );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        MarginTop: 100,
    },
    button: {   
        width: 100,
        height: 20,
        backgroundColor: "blue",
        borderRadius: 5,
        marginTop: 100,
        marginLeft: 100,

    },
})
export default Dropdown2;