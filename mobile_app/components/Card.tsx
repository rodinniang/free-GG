import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { NavLink } from 'react-router-dom'

type CardProps = {
  title: string
  children?: React.ReactNode
}

export default function Card({ title }: CardProps) {
  return (
    <View>
      <Image
        source={{
          uri: 'game.thumbnail'
        }}
        style={styles.image}
      />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300
  }
})

// const card = () => {
//   return (
//     <div className="header">
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
//               Accueil
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Categories" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
//               Coups de coeur
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//       <h1>React Movies</h1>
//     </div>
//   )
// }

// export default card
