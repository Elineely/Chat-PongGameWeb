import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, JoinTable } from "typeorm";
import { UserProfile } from "../../user/profile/user-profile.entity";
import { RoomEntity } from "./room.entity";
import { ConnectedUserEntity } from "./connected-user.entity";
import { JoinedRoomEntity } from "./joined-room.entity";
import { MessageEntity } from "./message.entity";

@Entity()
export class UserEntity {

  @OneToOne(() => UserProfile)
  @JoinColumn({ name: 'user_profile_id' }) 
  userProfile: UserProfile;

  @PrimaryColumn({ type: 'integer', unique: true, nullable: false}) 
  id: number;

  @ManyToMany(() => RoomEntity, (room) => room.users)
  rooms: RoomEntity[];
  // @Column({array : true, default: []})
  // rooms: RoomEntity[];

  @OneToMany(() => ConnectedUserEntity, connection => connection.user)
  connections: ConnectedUserEntity[];
  
  @OneToMany(() => MessageEntity, message => message.user)
  messages: MessageEntity[];

}
