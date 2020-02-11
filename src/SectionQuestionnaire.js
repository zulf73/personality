import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel
} from "@material-ui/core";

/*
<FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
    <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
    <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
    <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
    <FormControlLabel
      value="disabled"
      disabled
      control={<StyledRadio />}
      label="(Disabled option)"
    />
  </RadioGroup>
</FormControl>
*/
class PersonalityQuestion extends React.Component {
  handleChange = event => {};

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{this.props.name}</FormLabel>
        <RadioGroup
          name={this.props.name}
          value={this.props.name}
          onChange={this.handleChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
        </RadioGroup>
      </FormControl>
    );
  }
}
export default function SectionQuestinnaire() {
  var g = require(__dirname + "/questions.js");
  //const q = fs.readFileSync(__dirname + "/questions.json");
  const q = g.getQuestions();
  let json = q;
  var arr = [];
  Object.keys(json).forEach(function(key) {
    arr.push(json[key]);
  });

  return (
    <ul>
      {arr.map(item => (
        <li>
          <PersonalityQuestion name={item.title} />
        </li>
      ))}
    </ul>
  );

  /*
  return <p>Hello</p>;
  */
}
