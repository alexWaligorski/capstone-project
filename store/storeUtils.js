import { uid } from "uid";

export function transformMeetingDataToDefaultData(meetingData) {
  const date = transformDateToDatepickerValue(meetingData.date);
  const attending = transformAttendingToString(meetingData.attending);
  const transformedExcluded = transformExcludedToCheckboxValue(
    meetingData.excluded
  );

  return {
    ...meetingData,
    lat: meetingData.lat.toString(),
    long: meetingData.long.toString(),
    date: date,
    attending: attending,
    ...transformedExcluded,
    furtherinfo: meetingData.furtherInfo ? meetingData.furtherInfo : "",
  };
}

export function transformFormDataToMeetingData(formData) {
  const transformedDate = transformDateToGermanLocale(formData.date);
  const attendingDogs = transformAttendingToArray(formData.attending);
  const excludedString = transformExclusionCriteriaToString(formData);

  return {
    ...formData,
    lat: parseFloat(formData.lat),
    long: parseFloat(formData.long),
    id: formData.id ? formData.id : uid(),
    date: transformedDate,
    attending: attendingDogs,
    excluded: excludedString,
    furtherInfo: formData.furtherInfo ? formData.furtherInfo : "",
  };
}

export function transformDateToDatepickerValue(date) {
  const dateArray = date.split(".");
  const modifiedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  return modifiedDate;
}

export function transformDateToGermanLocale(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const modifiedDate = new Date(date).toLocaleString("de-DE", options);
  return modifiedDate;
}

export function transformAttendingToString(attending) {
  const attendingJoined = attending.map((attendee) => attendee.name).join(", ");
  return attendingJoined;
}

export function transformExcludedToCheckboxValue(excluded) {
  let excludedArray = [];
  let excludedObject = {};

  if (typeof excluded === "string") {
    excludedArray = excluded.split(", ");

    excludedArray.map((entry) => {
      if (entry === "Welpen") {
        excludedObject.welpen = true;
      }
      if (entry === "unkastrierte Rüden") {
        excludedObject.unkastrierterueden = true;
      }
      if (entry === "kastrierte Rüden") {
        excludedObject.kastrierterueden = true;
      }
      if (entry === "unkastrierte Hündinnen") {
        excludedObject.unkastriertehuendinnen = true;
      }
      if (entry === "kastrierte Hündinnen") {
        excludedObject.kastriertehuendinnen = true;
      }
      if (entry === "läufige Hündinnen") {
        excludedObject.laeufigehuendinnen = true;
      }
    });
  } else if (Array.isArray(excluded)) {
    excludedArray = excluded;
    excludedArray.map((entry) => {
      if (entry.criteria === "Welpen") {
        excludedObject.welpen = true;
      }
      if (entry.criteria === "unkastrierten Rüden") {
        excludedObject.unkastrierterueden = true;
      }
      if (entry.criteria === "kastrierten Rüden") {
        excludedObject.kastrierterueden = true;
      }
      if (entry.criteria === "unkastrierten Hündinnen") {
        excludedObject.unkastriertehuendinnen = true;
      }
      if (entry.criteria === "kastrierten Hündinnen") {
        excludedObject.kastriertehuendinnen = true;
      }
      if (entry.criteria === "läufigen Hündinnen") {
        excludedObject.laeufigehuendinnen = true;
      }
    });
  }

  return excludedObject;
}

export function transformAttendingToArray(attendingDogsString) {
  let trimmedDogs = attendingDogsString.replace(/\s+/g, "");
  let attendingDogsArray = trimmedDogs.split(",");
  let transformedDogs = attendingDogsArray.map((dog) => ({
    name: dog,
    id: uid(),
  }));

  return transformedDogs;
}

export function transformExclusionCriteriaToString(data) {
  let excludedArray = [];

  if (data.unkastrierterueden === "on") {
    excludedArray.push("unkastrierte Rüden");
    delete data.unkastrierterueden;
  }

  if (data.kastrierterueden === "on") {
    excludedArray.push("kastrierte Rüden");
    delete data.kastrierterueden;
  }

  if (data.kastriertehuendinnen === "on") {
    excludedArray.push("kastrierte Hündinnen");
    delete data.kastriertehuendinnen;
  }
  if (data.unkastriertehuendinnen === "on") {
    excludedArray.push("unkastrierte Hündinnen");
    delete data.unkastriertehuendinnen;
  }
  if (data.laeufigehuendinnen === "on") {
    excludedArray.push("läufige Hündinnen");
    delete data.laeufigehuendinnen;
  }
  if (data.welpen === "on") {
    excludedArray.push("Welpen");
    delete data.welpen;
  }

  let excluded = excludedArray.join(", ");

  return excluded;
}

export function transformDogProfileFormDataToDogProfileData(data) {
  data.castrated === "castrated"
    ? (data.castrated = true)
    : (data.castrated = false);
  data.inHeat === "laeufig" ? (data.inHeat = true) : (data.inHeat = false);
  const birthyearNumber = parseInt(data.birthyear);
  const age = 2023 - birthyearNumber;
  const excludedArray = transformExclusionCriteriaToArray(data);
  delete data.birthyear;
  return {
    ...data,
    age: age,
    excluded: excludedArray,
  };
}

export function transformDogProfileDataToDogProfileFormData(data) {
  const transformedExcluded = transformExcludedToCheckboxValue(data.excluded);

  return {
    ...data,
    ...transformedExcluded,
  };
}

export function transformExclusionCriteriaToArray(data) {
  let excludedArray = [];

  if (data.unkastrierterueden === "on") {
    excludedArray.push({ id: uid(), criteria: "unkastrierten Rüden" });
    delete data.unkastrierterueden;
  }

  if (data.kastrierterueden === "on") {
    excludedArray.push({ id: uid(), criteria: "kastrierten Rüden" });
    delete data.kastrierterueden;
  }

  if (data.kastriertehuendinnen === "on") {
    excludedArray.push({ id: uid(), criteria: "kastrierten Hündinnen" });
    delete data.kastriertehuendinnen;
  }
  if (data.unkastriertehuendinnen === "on") {
    excludedArray.push({ id: uid(), criteria: "unkastrierten Hündinnen" });
    delete data.unkastriertehuendinnen;
  }
  if (data.laeufigehuendinnen === "on") {
    excludedArray.push({ id: uid(), criteria: "läufigen Hündinnen" });
    delete data.laeufigehuendinnen;
  }
  if (data.welpen === "on") {
    excludedArray.push({ id: uid(), criteria: "Welpen" });
    delete data.welpen;
  }

  return excludedArray;
}
