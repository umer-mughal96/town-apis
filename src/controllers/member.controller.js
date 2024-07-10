const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { memberService } = require('../services');
const { getLandDoc } = require('../services/land.service');
const { findNdcById } = require('../services/ndc.service');
const { calculateDueDate } = require('../utils/date');
const { findMember, findMemberAndUpdate } = require('../services/member.service');

const createNdcMembers = catchAsync(async (req, res) => {
  const files = req.files;
  const data = req.body;
  let photos = [];
  let members = [];

  function getFileObject(file) {
    return {
      filename: file.filename,
      fieldname: file.fieldname,
      path: file.path.split('public')[1],
    };
  }

  data.members.forEach((member, indexx) => {
    const memberCnicFile = files.find((file, index) => file.fieldname == `members[${indexx}][cnicUpload]`);
    const memberPhotoFile = files.find((file, index) => file.fieldname == `members[${indexx}][photoUpload]`);
    const memberData = {
      cnic: member.cnic,
      name: member.name,
      sonOf: member.sonOf,
      address: member.address,
      mobile: member.phoneNo,
      cnicUpload: memberCnicFile
        ? {
            filename: memberCnicFile.filename,
            fieldname: memberCnicFile.fieldname,
            path: memberCnicFile.path.split('uploads')[1],
          }
        : undefined,
      photoUpload: memberPhotoFile
        ? {
            filename: memberPhotoFile.filename,
            fieldname: memberPhotoFile.fieldname,
            path: memberPhotoFile.path.split('uploads')[1],
          }
        : undefined,
    };
    members.push(memberData);
  });

  files.forEach((file) => {
    if (file.fieldname == 'buyerWitness[cnicUpload]') {
      data.buyerWitness.cnicUpload = getFileObject(file);
    }
    if (file.fieldname == 'buyerWitness[photoUpload]') {
      data.buyerWitness.photoUpload = getFileObject(file);
    }
    if (file.fieldname == 'sellerWitness[cnicUpload]') {
      data.sellerWitness.cnicUpload = getFileObject(file);
    }
    if (file.fieldname == 'sellerWitness[photoUpload]') {
      data.sellerWitness.photoUpload = getFileObject(file);
    }
    if (file.fieldname.includes('videos')) {
      data.video = getFileObject(file);
    }
    if (file.fieldname.includes('photos')) {
      photos.push(getFileObject(file));
    }
  });
  data.photos = photos;
  data.members = members;
  console.log('🚀 ~ createNdcMembers ~ data:', data);
  const ndc = await findNdcById(data.ndc);
  ndc.status = 'processing';
  const doc = await memberService.createMembers(data);
  ndc.member = doc._id;
  await ndc.save();
  res.status(httpStatus.CREATED).send({ success: true, members: doc });
});

const updateMembers = catchAsync(async (req, res) => {
  const { id } = req.body;
  const doc = await findMemberAndUpdate(id, req.body);
  res.status(httpStatus.OK).send({ success: true, members: doc });
});

module.exports = {
  createNdcMembers,
  updateMembers,
};
