import IcBrandLogo from 'src/assets/icons/ic_brand_logo.svg';
import IcBell from 'src/assets/icons/ic_bell.svg';
import IcFavorite from 'src/assets/icons/ic_favorite.svg';
import {colors} from 'src/utils/constants';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TopTabNavigator from './navigator/TopTabNavigator';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IcBrandLogo />

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <IcFavorite />
          </TouchableOpacity>
          <TouchableOpacity>
            <IcBell />
          </TouchableOpacity>
        </View>
      </View>

      <TopTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white[100],
    paddingLeft: 31,
    paddingRight: 20,
    paddingVertical: 4,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
});
