import { TCategory, TEvent } from './event.interface';
import { Event } from './event.model';

// categorization
const categorizeEvent = (title: string, notes?: string): TCategory => {
  const allText = `${title} ${notes}`.toLowerCase();

  // work keywords
  const workKeywords = ['meeting', 'project', 'client', 'deadline', 'office'];

  // wersonal keywords
  const personalKeywords = [
    'birthday',
    'family',
    'vacation',
    'dinner',
    'personal',
  ];

  // work category checking

  for (const keyword of workKeywords) {
    if (allText.includes(keyword)) { 
      return 'Work';
    }
  }
  // personal category checking

  for (const keyword of personalKeywords) {
    if (allText.includes(keyword)) {
      return 'Personal';
    }
  }

  return 'Other';
};

const createEventIntoDB = async (payload: TEvent) => {
  const categorizedPayload = {
    ...payload,
    category: categorizeEvent(payload.title, payload.notes),
  };
  // console.log("in service", categorizedPayload);

  const result = await Event.create(categorizedPayload);
  return result;
};

const getAllEventFromDB = async () => {
  const result = await Event.find({isDeleted:{$ne: true}}).sort({ date: 1, time: 1 });
  return result;
};

const updateEventIntoDB = async (_id: string) => {
  const result = await Event.updateOne(
    { _id },
    { archived: true },
    { new: true },
  );
  return result;
};
const deleteEventFromDB = async (_id: string) => {
  // console.log(_id, "delete");
  const result = await Event.updateOne(
    { _id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const OrderService = {
  createEventIntoDB,
  getAllEventFromDB,
  updateEventIntoDB,
  deleteEventFromDB,
};
