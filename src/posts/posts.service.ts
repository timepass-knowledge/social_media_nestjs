import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) { }
  create(createPostDto: CreatePostDto, user: any) {
    const userRef = new User();
    userRef.id = user.userId;
    const newPost = this.postsRepository.create({
      title: createPostDto.title,
      description: createPostDto.description,
      isActive: true,
      userRef: userRef,
    });
    return this.postsRepository.save(newPost);
  }

  findAll(user: any) {
    return this.postsRepository.findAndCount({
      where: {
        userRef: {
          id: user.userId,
        },
      },
    });
  }

  findOne(id: number, user) {
    return this.postsRepository.findOne({
      where: {
        postId: id,
        userRef: {
          id: user.userId,
        },
      },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
