import Event from "../models/event.model.js";

// CREATE EVENT
export const createEvent = async (
  req,
  res
) => {

  try {

    const event = await Event.create({

      title: req.body.title,

      description:
        req.body.description,

      location:
        req.body.location,

      eventDate:
        req.body.eventDate,

        image:
        req.file?.path || "",

      author: req.user.id,

    });

    res.status(201).json({
      success: true,
      event,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// GET EVENTS
export const getEvents = async (
  req,
  res
) => {

  try {

    const events = await Event.find()
      .sort({ eventDate: 1 });

    res.status(200).json({
      success: true,
      events,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getEventById = async (
    req,
    res
  ) => {
  
    try {
  
      const event =
        await Event.findById(
          req.params.id
        );
  
      if (!event) {
  
        return res.status(404).json({
          success: false,
          message: "Event not found",
        });
  
      }
  
      res.status(200).json({
        success: true,
        event,
      });
  
    } catch (error) {
  
      console.error(error);
  
      res.status(500).json({
        success: false,
        message: error.message,
      });
  
    }
  };
// DELETE EVENT
export const deleteEvent = async (
  req,
  res
) => {

  try {

    await Event.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Event deleted",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};