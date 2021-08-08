import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DoctorDataSource} from '../datasources';
import {Appointment, AppointmentRelations} from '../models';

export class AppointmentRepository extends DefaultCrudRepository<
  Appointment,
  typeof Appointment.prototype.id,
  AppointmentRelations
> {
  constructor(
    @inject('datasources.Doctor') dataSource: DoctorDataSource,
  ) {
    super(Appointment, dataSource);
  }
}
