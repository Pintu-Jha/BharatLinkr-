import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {fontNames} from '../../../styles/typography';
import {textScale} from '../../../styles/responsiveStyles';
import {spacing} from '../../../styles/spacing';
import TextComp from '../../common/TextComp';

const EditIndox = ({data, tableHead}) => {
  const [widthArr] = useState([
    spacing.WIDTH_70,
    spacing.WIDTH_184,
    spacing.WIDTH_160,
    spacing.WIDTH_164,
    spacing.WIDTH_124,
    spacing.WIDTH_156,
    spacing.WIDTH_156,
    spacing.WIDTH_164,
    spacing.WIDTH_300,
    spacing.WIDTH_250,
    spacing.WIDTH_156,
    spacing.WIDTH_156,
  ]);

  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal>
        <View>
          <Table>
            <Row
              data={tableHead}
              style={{
                height: spacing.HEIGHT_52,
                backgroundColor: '#FCFCFC',
                borderBottomWidth: 1,
                borderColor: '#C1C0B9',
              }}
              textStyle={{
                textAlign: 'center',
                fontFamily: fontNames.POPPINS_FONT_FAMILY_BOLD,
                color: '#463196',
                fontSize: textScale(16),
                opacity: 1,
              }}
              widthArr={widthArr}>
              <View style={{borderBottomWidth: 0.5, backgroundColor: '#000'}}>
                <TextComp text="jhg" style={{color: '#000'}} />
              </View>
            </Row>
          </Table>
          {/* <FilterUi widthArr ={widthArr} filerData={tableHead}/> */}
          <ScrollView style={{}}>
            <Table>
              {data.map(item => (
                <Row
                  key={item.id}
                  data={[
                    item.id.toString(),
                    item.post_category,
                    item.post_title,
                    item.post_by,
                    item.post_date,
                    item.status,
                    item.contact_no,
                    item.email_id,
                    item.education,
                    item.skills,
                    item.apply_date,
                    item.location,
                  ]}
                  widthArr={widthArr}
                  style={{
                    height: spacing.HEIGHT_42,
                    backgroundColor: '#FCFCFC',
                    borderBottomWidth: 1,
                    borderColor: '#C1C0B9',
                  }}
                  textStyle={{
                    textAlign: 'center',
                    color: '#463196',
                    fontFamily: fontNames.POPPINS_FONT_FAMILY_MEDIUM,
                    fontSize: textScale(12),
                    opacity: 1,
                  }}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditIndox;
