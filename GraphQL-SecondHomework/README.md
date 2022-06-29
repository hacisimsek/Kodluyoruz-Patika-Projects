User üzerindeki Mutation testleri

mutation addUser {
addUser(data: { username: "asdasd", email: "fsdljhgsdfg" }) {
id
}
}

mutation updateUser {
updateUser(data: { id: "7", email: "fsdljhgsdfg" }) {
id
username
email
}
}

mutation deleteUser {
deleteUser(id: "7") {
id
username
email
}
}

mutation deleteAllUsers {
deleteAllUsers(interact: "i agree")
}

Event üzerindeki Mutation testleri

mutation addEvent {
addEvent(data: { title:"dskjfhksfjhg" }) {
id
}
}

mutation updateEvent {
updateEvent(data: { id: "3", title:"asdasdasdsasa"}) {
id
title
}
}

mutation deleteEvent {
deleteEvent(id: "7") {
id
}
}

mutation deleteAllEvents {
deleteAllEvents(interact: "i agree")
}

Location üzerindeki Mutation testleri

mutation addLocation {
addLocation(data: { name:"dskjfhksfjhg" }) {
id
}
}

mutation updateLocation {
updateLocation(data: { id: "293bf89e-7193-4aa6-8177-3f2990e1e060", name:"asdasdasdsasa"}) {
id
name
}
}

mutation deleteLocation {
deleteLocation(id: "293bf89e-7193-4aa6-8177-3f2990e1e060") {
id
}
}

mutation deleteAllLocations {
deleteAllLocations(interact: "i agree")
}

Participant üzerindeki Mutation testleri

mutation addParticipant {
addParticipant(data: { user_id:"3",event_id:"3" }) {
id
}
}

mutation updateParticipant {
updateParticipant(data: { id: "11d44372-5d6d-4860-a99d-ad408468d4b4", user_id:"asdasdasdsasa"}) {
id
user_id
}
}

mutation deleteParticipant {
deleteParticipant(id: "11d44372-5d6d-4860-a99d-ad408468d4b4") {
id
user_id
}
}

mutation deleteAllParticipants {
deleteAllParticipants(interact: "i agree")
}
