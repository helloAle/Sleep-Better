import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name= "TabOneScreen"
        options={{
          title: 'TabOneScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="TabTwoScreen"
        options={{
          title: 'TabTwoScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
          name="TabThreeScreen"
          options={{
            title: 'TabThreeScreen',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
       <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
       <Tabs.Screen
              name="Formulario"
              options={{
                title: 'Formulario',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />
       <Tabs.Screen
               name="Feedback"
               options={{
                   title: 'Feedback',
                   tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                   }}
               />
    </Tabs>
  );
}
