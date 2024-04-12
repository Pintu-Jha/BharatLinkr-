import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {spacing} from '../../styles/spacing';
// import { Icon } from 'react-native-elements'; // Assuming you have an icon library

const Dropdown = ({options, onSelect,isVisible}) => {
//   const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = option => {
    setSelectedOption(option);
    onSelect(option);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      {isVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={options}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => handleSelect(item)}>
                <Text style={{color:'red'}}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1, // Ensure dropdown is above other content
    backgroundColor: 'red',
    //
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    maxHeight: 200,
    zIndex: 2, // Ensure dropdown is above other content
    bottom: spacing.HEIGHT_155,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});


