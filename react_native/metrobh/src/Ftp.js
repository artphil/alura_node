import { Button, View } from 'react-native';
import FTP from 'react-native-ftp';

function Ftp() {
  function onButtonpress() {
    FTP.setup("pontobh.cbtu.gov.br:8021", 21) //Setup host
    console.log('result');
    FTP.login("ftpuser", "d3V5Cbt#").then(
      (result) => {
        console.log('entrou');
        FTP.list(".").then(
          (result) => {
            console.log(result);
          }
        );
      },
      (error) => {
        alert(error);
      }
    )
  }
  return (
    <View >
      <Button onPress={onButtonpress} title="hi" />
    </View>
  );
}

export default Ftp;