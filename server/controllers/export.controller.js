import { Parser } from "json2csv";

import Supporter from "../models/supporter.model.js";
import Donation from "../models/donation.model.js";
import Event from "../models/event.model.js";

// EXPORT SUPPORTERS
export const exportSupporters =
  async (req, res) => {

    try {

      const supporters =
        await Supporter.find();

      const fields = [
        "name",
        "email",
        "phone",
        "city",
        "skills",
        "message",
      ];

      const parser =
        new Parser({
          fields,
        });

      const csv =
        parser.parse(
          supporters
        );

      res.header(
        "Content-Type",
        "text/csv"
      );

      res.attachment(
        "supporters.csv"
      );

      return res.send(csv);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message: error.message,
      });

    }
  };

// EXPORT DONATIONS
export const exportDonations =
  async (req, res) => {

    try {

      const donations =
        await Donation.find();

      const fields = [
        "donorName",
        "amount",
        "method",
        "status",
        "message",
      ];

      const parser =
        new Parser({
          fields,
        });

      const csv =
        parser.parse(
          donations
        );

      res.header(
        "Content-Type",
        "text/csv"
      );

      res.attachment(
        "donations.csv"
      );

      return res.send(csv);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message: error.message,
      });

    }
  };

// EXPORT EVENTS
export const exportEvents =
  async (req, res) => {

    try {

      const events =
        await Event.find();

      const fields = [
        "title",
        "location",
        "eventDate",
        "description",
      ];

      const parser =
        new Parser({
          fields,
        });

      const csv =
        parser.parse(events);

      res.header(
        "Content-Type",
        "text/csv"
      );

      res.attachment(
        "events.csv"
      );

      return res.send(csv);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message: error.message,
      });

    }
  };