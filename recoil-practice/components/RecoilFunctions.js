const { useRecoilState, atom } = require("recoil");

const darkMode = atom({
  key: "darkMode",
  default: "false",
});
const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkMode);
  return (
    <div>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={(event) => setDarkMode(event.target.checked)}
      />
    </div>
  );
};

const Button = () => {
  cosnt[darkMode] = useRecoilState(darkMode);

  return (<div>
    <button style={{backgroundColor: darkMode?'black': 'white', color: darkMode?'white': 'black'}}>MY UI Button</button>
  </div>);
};

export default RecoilFunction({DarkModeSwitch,Button,dar});