package com.pengcheng.template.dao;

import com.pengcheng.template.domain.Join;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinMapper {

    Join selectOneById(@Param("id") Long id);

}
